from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import schemas, crud
from database import get_db

router = APIRouter()

@router.get("/about", response_model=schemas.About)
def get_about(db: Session = Depends(get_db)):
    return crud.get_about(db)
