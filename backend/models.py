from sqlalchemy import Column, Integer, String, Text, ForeignKey
from sqlalchemy.orm import relationship
from database import Base


class Project(Base):
    __tablename__ = "projects"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    title_description = Column(Text, nullable=False)
    description = Column(Text, nullable=False)
    tech_stack = Column(String(200))
    demo_link = Column(String(200))
    github_link = Column(String(200))
    images = relationship("ProjectImages", back_populates="project", cascade="all, delete")
    
class ProjectImages(Base):
    __tablename__ = "project_images"
    id = Column(Integer, primary_key=True, index=True)
    image_url = Column(String(300), nullable=False)
    project_id = Column(Integer, ForeignKey("projects.id"))
    project = relationship("Project", back_populates="images")

class About(Base):
    __tablename__ = "about"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    role = Column(String(100))
    description = Column(Text)

class ContactMessage(Base):
    __tablename__ = "contact_messages"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable=False)
    email = Column(String(100), nullable=False)
    message = Column(Text, nullable=False)

class Admin(Base):
    __tablename__ = "admin"
    id = Column(Integer, primary_key=True, index=True)
    name = Column(String(100), nullable = False)
    email = Column(String(100), nullable = False)
    password = Column(String(100), nullable=False)





# from pydantic import BaseModel, Field
# from typing import Optional, List
# from bson import ObjectId

# # Helper class to make ObjectId JSON serializable
# class PyObjectId(ObjectId):
#     @classmethod
#     def __get_validators__(cls):
#         yield cls.validate
    
#     @classmethod
#     def validate(cls, v):
#         if not ObjectId.is_valid(v):
#             raise ValueError("Invalid ObjectId")
#         return ObjectId(v)
    
#     @classmethod
#     def __modify_schema__(cls, field_schema):
#         field_schema.update(type="string")


# # ---------- Project Models ----------
# class ProjectImage(BaseModel):
#     id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
#     image_url: str

#     model_config = {
#         "populate_by_name": True,
#         "arbitrary_types_allowed": True,
#         "json_encoders": {ObjectId: str}
#     }


# class Project(BaseModel):
#     id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
#     name: str
#     title_description: str
#     description: str
#     tech_stack: Optional[str] = None
#     demo_link: Optional[str] = None
#     github_link: Optional[str] = None
#     images: Optional[List[ProjectImage]] = []

#     model_config = {
#         "populate_by_name": True,
#         "arbitrary_types_allowed": True,
#         "json_encoders": {ObjectId: str}
#     }


# # ---------- About Model ----------
# class About(BaseModel):
#     id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
#     name: str
#     role: Optional[str] = None
#     description: Optional[str] = None

#     model_config = {
#         "populate_by_name": True,
#         "arbitrary_types_allowed": True,
#         "json_encoders": {ObjectId: str}
#     }


# # ---------- Contact Message Model ----------
# class ContactMessage(BaseModel):
#     id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
#     name: str
#     email: str
#     message: str

#     model_config = {
#         "populate_by_name": True,
#         "arbitrary_types_allowed": True,
#         "json_encoders": {ObjectId: str}
#     }


# # ---------- Admin Model ----------
# class Admin(BaseModel):
#     id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
#     name: str
#     email: str
#     password: str

#     model_config = {
#         "populate_by_name": True,
#         "arbitrary_types_allowed": True,
#         "json_encoders": {ObjectId: str}
#     }
