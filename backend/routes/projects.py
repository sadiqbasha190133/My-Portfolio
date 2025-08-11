from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import schemas, crud
from database import get_db

router = APIRouter()

@router.get("/projects", response_model=list[schemas.Project])
def read_projects(db: Session = Depends(get_db)):
    return crud.get_projects(db)

@router.post("/project/create", response_model=schemas.Project)
def add_project(project: schemas.ProjectCreate, db: Session = Depends(get_db)):
    return crud.create_project(db, project)

@router.get("/projects/{project_id}", response_model=schemas.Project)
def read_project(project_id: int, db: Session = Depends(get_db)):
    return crud.get_project_by_id(db, project_id)

@router.put("/projects/update/{project_id}", response_model=schemas.Project)
def update_project(project_id: int, updated_project: schemas.ProjectCreate, db: Session=Depends(get_db)):
    return crud.update_project_by_id(db, project_id, updated_project)

