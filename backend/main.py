from fastapi import FastAPI
from fastapi.middleware.cors import CORSMiddleware
from database import Base, engine
import models
from routes import projects, about, contact, admin

models.Base.metadata.create_all(bind=engine)

app = FastAPI()

origins = [
    "https://sadiq-myportfolio.netlify.app",
    "http://localhost:5173"
]

# Allow frontend access
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,  # In production, restrict to frontend URL
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)

@app.get("/")
def home():
    return {"message": "FastAPI running on Render!"}


# Include routes
app.include_router(projects.router)
app.include_router(about.router)
app.include_router(contact.router)
app.include_router(admin.router)




# from fastapi import FastAPI
# from fastapi.middleware.cors import CORSMiddleware
# from routes import projects, about, contact, admin
# from database import db
# from contextlib import asynccontextmanager

# @asynccontextmanager
# async def lifespan(app: FastAPI):
#     # Startup code
#     try:
#         await db.list_collection_names()
#         print("MongoDB connected successfully!")
#     except Exception as e:
#         print("MongoDB connection failed:", e)
#     yield
#     # Shutdown code (optional)
#     print("FastAPI shutting down...")

# app = FastAPI(lifespan=lifespan)

# # CORS setup
# origins = [
#     "https://sadiq-myportfolio.netlify.app",
#     "http://localhost:5173"
# ]

# app.add_middleware(
#     CORSMiddleware,
#     allow_origins=origins,
#     allow_credentials=True,
#     allow_methods=["*"],
#     allow_headers=["*"],
# )

# # Root route
# @app.get("/")
# async def home():
#     return {"message": "FastAPI + MongoDB running successfully!"}

# # Register routers
# app.include_router(projects.router)
# app.include_router(about.router)
# app.include_router(contact.router)
# app.include_router(admin.router)
