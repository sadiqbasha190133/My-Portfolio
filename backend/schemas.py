
from pydantic import BaseModel
from typing import Optional

class ProjectBase(BaseModel):
    name: str
    description: str
    tech_stack: Optional[str]
    demo_link: Optional[str]
    github_link: Optional[str]

class ProjectCreate(ProjectBase):
    pass

class Project(ProjectBase):
    id: int
    class Config:
        orm_mode = True

class AboutBase(BaseModel):
    name: str
    role: Optional[str]
    description: Optional[str]

class About(AboutBase):
    id: int
    class Config:
        orm_mode = True

class ContactBase(BaseModel):
    name: str
    email: str
    message: str

class ContactMessage(ContactBase):
    id: int
    class Config:
        orm_mode = True
