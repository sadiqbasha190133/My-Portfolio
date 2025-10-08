from motor.motor_asyncio import AsyncIOMotorClient
from decouple import config
from fastapi import Depends

# Get MongoDB URL from .env
MONGO_URL = config("MONGO_URL", default="mongodb://localhost:27017")

# Initialize the client
client = AsyncIOMotorClient(MONGO_URL)

# Choose your database name
db = client["myPortfolio"]

# Dependency to inject DB into routes
async def get_db():
    return db
