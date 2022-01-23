from fastapi import FastAPI
from pydantic import BaseModel
from pydantic.networks import EmailStr
# from fastapi.middleware.cors import CORSMiddleware


app = FastAPI()
origins = "https://localhost:3000"

def check_session():
    # Call registry to check if session is still active 
    # if session_active:
    #     return True
    # else:
    #     return False
    return False


@app.get("/get_forecast")
def get_data(item: int = None):
    if check_session():
        #call registry to check the 
        # log_activity()
        
        pass

    else:
        # log_activity()
        return {"session_expired"}    

@app.get("/")
def get_data(item: int = None):
    # if check_session():
    #     #call registry to check the 
    #     # log_activity()
    #     pass

    # else:
    #     # log_activity()
    #     return {"session_expired"}    
    return {"Hii from API"}


@app.get("/GoogleApi")
def get_data(item: int = None):
    # if check_session():
    #     #call registry to check the 
    #     # log_activity()
    #     pass

    # else:
    #     # log_activity()
    #     return {"session_expired"}    
    return {"Hii from GoogleApi"}


@app.get("/register")
def get_data(item: int = None):
    # if check_session():
    #     #call registry to check the 
    #     # log_activity()
    #     pass

    # else:
    #     # log_activity()
    #     return {"session_expired"}    
    return {"Hii from Register"}




