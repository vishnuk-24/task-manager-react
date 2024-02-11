from motor import motor_asyncio

from db.config import database_url, db_collection, db_name
from db.model import Task


# Connect to the database
client = motor_asyncio.AsyncIOMotorClient(database_url)

# Define the database name and collection
db = client[db_name]
collection = db[db_collection]


async def fetch_all_tasks() -> list:
    tasks = []
    documents = collection.find({})

    async for document in documents:
        task = Task(**document)
        tasks.append(task)

    return tasks

async def fetch_one_task(title: str):
    document = await collection.find_one({"title": title})
    return document

async def create_task(task: dict) -> Task:
    result = task
    await collection.insert_one(task.dict())
    return result

async def update_task(title: str, desc: dict):
    await collection.update_one({"title": title}, {"$set": {"description": desc}})
    document = await collection.find_one({"title": title})
    return document

async def delete_task(title: str) -> bool:
    await collection.delete_one({"title": title})
    return True

