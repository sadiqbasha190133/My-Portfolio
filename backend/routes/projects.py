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




# from fastapi import APIRouter, Depends, HTTPException
# from database import get_db
# import schemas, crud

# router = APIRouter()

# @router.get("/projects", response_model=list[schemas.Project])
# async def read_projects(db=Depends(get_db)):
#     return await crud.get_projects(db)

# @router.post("/project/create", response_model=schemas.Project)
# async def add_project(project: schemas.ProjectCreate, db=Depends(get_db)):
#     return await crud.create_project(db, project)

# @router.get("/projects/{project_id}", response_model=schemas.Project)
# async def read_project(project_id: str, db=Depends(get_db)):
#     project = await crud.get_project_by_id(db, project_id)
#     if not project:
#         raise HTTPException(status_code=404, detail="Project not found")
#     return project

# @router.put("/projects/update/{project_id}", response_model=schemas.Project)
# async def update_project(project_id: str, updated_project: schemas.ProjectCreate, db=Depends(get_db)):
#     project = await crud.update_project_by_id(db, project_id, updated_project)
#     if not project:
#         raise HTTPException(status_code=404, detail="Project not found")
#     return project
