from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import schemas, crud, database
from hashing import get_password_hash


router = APIRouter()

@router.post("/user", response_model=schemas.ShowAdmin)
def create_admin(admin: schemas.Admin, db: Session = Depends(database.get_db)):
    admin.password = get_password_hash(admin.password)
    return crud.create_admin(db, admin)

@router.post("/admin/login", response_model=schemas.ShowLoginAdmin)
def admin_login(admin_details: schemas.LoginAdmin, db: Session = Depends(database.get_db)):
    return crud.admin_login(db, admin_details)
    