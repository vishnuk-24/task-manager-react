import os
from dotenv import load_dotenv

load_dotenv()

database_url = os.getenv("MONGO_DB_URL")
db_name = os.getenv("MONGO_DB_NAME")
db_collection = os.getenv("MONGO_DB_COLLECTION_NAME")
