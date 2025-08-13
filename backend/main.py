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
