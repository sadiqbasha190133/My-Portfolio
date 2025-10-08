from sqlalchemy import create_engine
from sqlalchemy.ext.declarative import declarative_base
from sqlalchemy.orm import sessionmaker
from decouple import config

DATABASE_URL = config("DATABASE_URL")
engine = create_engine(
    DATABASE_URL,
    pool_pre_ping=True,        # Checks connection before using
    pool_recycle=300,          # Reconnect every 5 mins
    pool_size=5,               # Limit active connections
    max_overflow=10
)
SessionLocal = sessionmaker(autocommit=False, autoflush=False, bind=engine)
Base = declarative_base()

# Dependency for DB session in routes
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()


# from motor.motor_asyncio import AsyncIOMotorClient
# from decouple import config
# from fastapi import Depends

# # Get MongoDB URL from .env
# MONGO_URL = config("MONGO_URL", default="mongodb://localhost:27017")

# # Initialize the client
# client = AsyncIOMotorClient(MONGO_URL)

# # Choose your database name
# db = client["myPortfolio"]

# # Dependency to inject DB into routes
# async def get_db():
#     return db
