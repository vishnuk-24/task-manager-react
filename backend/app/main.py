from fastapi import FastAPI, HTTPException
from fastapi.middleware.cors import CORSMiddleware

from db.model import Task
from .service import (
    fetch_all_tasks,
    fetch_one_task,
    create_task,
    update_task,
    delete_task
)


app = FastAPI()

origins = ['https://localhost:3000', 'http://localhost:5173']

app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get('/')
async def read_root():
    return {'message': 'Welcome to Task Manager'}

@app.get('/api/v1/tasks')
async def get_tasks():
    return await fetch_all_tasks()

@app.get('/api/v1/task/{title}', response_model=Task)
async def get_task(title: str):
    response = await fetch_one_task(title=title)
    if not response:
        raise HTTPException(status_code=404, detail="Task not found")
    return response

@app.post('/api/v1/task', response_model=Task)
async def post_task(task: Task):
    response = await create_task(task=task)
    if not response:
        raise HTTPException(status_code=400, detail="Bad Request")
    return response

@app.put('/api/v1/task/{title}', response_model=Task)
async def put_task(title: str, description: str):
    response = await update_task(title=title, desc=description)
    if not response:
        raise HTTPException(status_code=404, detail="No task to update")
    return response

@app.delete('/api/v1/task/{title}')
async def remove_task(title: str):
    response = await delete_task(title=title)
    if not response:
        raise HTTPException(status_code=404, detail="No task to delete")
    return {"message": "Deleted"}
