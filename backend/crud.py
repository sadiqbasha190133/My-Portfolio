from sqlalchemy.orm import Session
import models, schemas
from fastapi import HTTPException
from hashing import verify_password


def get_projects(db: Session):
    return db.query(models.Project).all()

def create_project(db: Session, project: schemas.ProjectCreate):
    db_project = models.Project(**project.model_dump())
    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project

def get_about(db: Session):
    return db.query(models.About).first()

def create_contact_message(db: Session, message: schemas.ContactBase):
    db_message = models.ContactMessage(**message.model_dump())
    db.add(db_message)
    db.commit()
    db.refresh(db_message)
    return db_message

def create_admin(db: Session, admin: schemas.Admin):
    db_admin_user = models.Admin(**admin.model_dump())
    db.add(db_admin_user)
    db.commit()
    db.refresh(db_admin_user)
    return db_admin_user

def admin_login(db: Session, admin_details: schemas.LoginAdmin):
    admin_user = db.query(models.Admin).filter(models.Admin.email == admin_details.email).first()
    if not admin_user:
        raise HTTPException(status_code = 404, detail="User not found")
    if not verify_password(admin_details.password, admin_user.password):
        raise HTTPException(status_code=400, detail="Password is incorrect")
    return admin_user



