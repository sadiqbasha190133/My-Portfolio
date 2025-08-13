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
    max_overflow=10,
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
