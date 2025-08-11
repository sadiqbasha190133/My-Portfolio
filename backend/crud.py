from sqlalchemy.orm import Session
import models, schemas
from fastapi import HTTPException
from hashing import verify_password


def get_projects(db: Session):
    return db.query(models.Project).all()


def create_project(db: Session, project: schemas.ProjectCreate):
    # Convert Pydantic ProjectImageCreate objects to ProjectImages model instances
    image_objects = [
        models.ProjectImages(**img.model_dump()) for img in project.images
    ] if project.images else []

    # Create Project instance with images
    db_project = models.Project(
        name=project.name,
        title_description=project.title_description,
        description=project.description,
        tech_stack=project.tech_stack,
        demo_link=project.demo_link,
        github_link=project.github_link,
        images=image_objects
    )

    db.add(db_project)
    db.commit()
    db.refresh(db_project)
    return db_project


def get_project_by_id(db: Session, project_id: int):
    project = db.query(models.Project).filter(models.Project.id == project_id).first()
    if not project:
        raise HTTPException(status_code=404, detail="Project not found")
    return project

def update_project_by_id(db: Session, project_id, updated_project:schemas.ProjectCreate):
    db_project = db.query(models.Project).filter(models.Project.id == project_id).first()
    if not db_project:
        return HTTPException(status_code=404, detail=f"project with the following id: {project_id} is not found")
    db_project.name = updated_project.name
    db_project.title_description = updated_project.title_description
    db_project.description = updated_project.description
    db_project.tech_stack = updated_project.tech_stack
    db_project.demo_link = updated_project.demo_link
    db_project.github_link = updated_project.github_link

    db.query(models.ProjectImages).filter(models.ProjectImages.project_id == project_id).delete()

    image_objects = [
        models.ProjectImages(**img.model_dump(), project_id=project_id)
        for img in updated_project.images
    ] if updated_project.images else []

    db_project.images = image_objects
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



