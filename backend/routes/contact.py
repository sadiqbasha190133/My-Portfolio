from fastapi import APIRouter, Depends
from sqlalchemy.orm import Session
import schemas, crud
from database import get_db

router = APIRouter()

@router.post("/contact", response_model=schemas.ContactMessage)
def send_message(message: schemas.ContactBase, db: Session = Depends(get_db)):
    return crud.create_contact_message(db, message)
