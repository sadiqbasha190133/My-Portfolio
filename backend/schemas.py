
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




# from pydantic import BaseModel, Field
# from typing import Optional, List
# from bson import ObjectId


# # -------------------- Helper for Mongo ObjectId --------------------

# class PyObjectId(ObjectId):
#     @classmethod
#     def __get_validators__(cls):
#         yield cls.validate

#     @classmethod
#     def validate(cls, v, info=None):
#         if isinstance(v, ObjectId):
#             return v
#         if not ObjectId.is_valid(v):
#             raise ValueError("Invalid ObjectId")
#         return ObjectId(v)

#     @classmethod
#     def __get_pydantic_json_schema__(cls, core_schema, handler):
#         json_schema = handler(core_schema)
#         json_schema.update(type="string")
#         return json_schema






# # -------------------- Project Images --------------------
# class ProjectImageBase(BaseModel):
#     image_url: str


# class ProjectImageCreate(ProjectImageBase):
#     pass


# class ProjectImage(ProjectImageBase):
#     id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")

#     model_config = {
#         "populate_by_name": True,
#         "arbitrary_types_allowed": True,
#         "json_encoders": {ObjectId: str},
#     }


# # -------------------- Projects --------------------
# class ProjectBase(BaseModel):
#     name: str
#     title_description: str
#     description: str
#     tech_stack: Optional[str] = None
#     demo_link: Optional[str] = None
#     github_link: Optional[str] = None


# class ProjectCreate(ProjectBase):
#     images: Optional[List[ProjectImageCreate]] = []


# class Project(ProjectBase):
#     id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
#     images: List[ProjectImage] = []

#     model_config = {
#         "populate_by_name": True,
#         "arbitrary_types_allowed": True,
#         "json_encoders": {ObjectId: str},
#     }


# # -------------------- About --------------------
# class AboutBase(BaseModel):
#     name: str
#     role: Optional[str] = None
#     description: Optional[str] = None


# class About(AboutBase):
#     id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")

#     model_config = {
#         "populate_by_name": True,
#         "arbitrary_types_allowed": True,
#         "json_encoders": {ObjectId: str},
#     }


# # -------------------- Contact Messages --------------------
# class ContactBase(BaseModel):
#     name: str
#     email: str
#     message: str


# class ContactMessage(ContactBase):
#     id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")

#     model_config = {
#         "populate_by_name": True,
#         "arbitrary_types_allowed": True,
#         "json_encoders": {ObjectId: str},
#     }


# # -------------------- Admin --------------------
# class Admin(BaseModel):
#     name: str
#     email: str
#     password: str


# class ShowAdmin(Admin):
#     id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")

#     model_config = {
#         "populate_by_name": True,
#         "arbitrary_types_allowed": True,
#         "json_encoders": {ObjectId: str},
#     }


# class LoginAdmin(BaseModel):
#     email: str
#     password: str


# class ShowLoginAdmin(BaseModel):
#     id: Optional[PyObjectId] = Field(default_factory=PyObjectId, alias="_id")
#     name: str
#     email: str

#     model_config = {
#         "populate_by_name": True,
#         "arbitrary_types_allowed": True,
#         "json_encoders": {ObjectId: str},
#     }
