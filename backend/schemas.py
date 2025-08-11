
from pydantic import BaseModel
from typing import Optional, List


class ProjectImageBase(BaseModel):
    image_url: str

class ProjectImageCreate(ProjectImageBase):
    pass

class ProjectImage(ProjectImageBase):
    id: int
    class Config:
        orm_mode = True

class ProjectBase(BaseModel):
    name: str
    title_description: str
    description: str
    tech_stack: Optional[str]
    demo_link: Optional[str]
    github_link: Optional[str]

class ProjectCreate(ProjectBase):
    images: Optional[List[ProjectImageCreate]] = []

class Project(ProjectBase):
    id: int
    images: List[ProjectImage] = []
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


class Admin(BaseModel):
    name: str
    email: str
    password: str 

class ShowAdmin(Admin):
    id: int
    class Config:
        orm_mode = True

class LoginAdmin(BaseModel):
    email: str
    password: str

class ShowLoginAdmin(BaseModel):
    id: int
    name: str
    email: str
    class Config:
        orm_mode = True



    



    
