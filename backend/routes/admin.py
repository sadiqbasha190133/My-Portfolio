# from fastapi import APIRouter, Depends
# from sqlalchemy.orm import Session
# import schemas, crud, database
# from hashing import get_password_hash


# router = APIRouter()

# @router.post("/user", response_model=schemas.ShowAdmin)
# def create_admin(admin: schemas.Admin, db: Session = Depends(database.get_db)):
#     admin.password = get_password_hash(admin.password)
#     return crud.create_admin(db, admin)

# @router.post("/admin/login", response_model=schemas.ShowLoginAdmin)
# def admin_login(admin_details: schemas.LoginAdmin, db: Session = Depends(database.get_db)):
#     return crud.admin_login(db, admin_details)
    


from fastapi import APIRouter, Depends, HTTPException
from database import get_db
import schemas, crud
from hashing import get_password_hash, verify_password  # keep your hashing utils

router = APIRouter()

# ----------------- Create Admin -----------------
@router.post("/user", response_model=schemas.ShowAdmin)
async def create_admin(admin: schemas.Admin, db=Depends(get_db)):
    # Hash the password before saving
    admin.password = get_password_hash(admin.password)
    return await crud.create_admin(db, admin)


# ----------------- Admin Login -----------------
@router.post("/admin/login", response_model=schemas.ShowLoginAdmin)
async def admin_login(admin_details: schemas.LoginAdmin, db=Depends(get_db)):
    admin_user = await crud.admin_login(db, admin_details)

    # Verify password (hashed)
    # if not verify_password(admin_details.password, admin_user["password"]):
    #     raise HTTPException(status_code=400, detail="Password is incorrect")

    # Return only the fields defined in ShowLoginAdmin schema
    return {
        "id": admin_user["id"],
        "name": admin_user["name"],
        "email": admin_user["email"]
    }
