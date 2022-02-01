from random import SystemRandom
from fastapi import FastAPI
from pydantic import BaseModel
import asyncio
import json

from Plotting import getPlottingDataController

app = FastAPI()

class getPlottedDataBody(BaseModel):
    year : str
    month : str
    day : str
    station : str
    hour : str
    minute : str
    second : str

@app.get("/ping")
async def root():
    return { "ping" : "PONG"}

@app.post("/getPlottedData")
async def getPlottedData( requestBody: getPlottedDataBody ):
    try:
        done,pending = await asyncio.wait([getPlottingDataController(dict(requestBody))])
        # return result
        for t in done:
            return json.dumps({
                "status" : True,
                "isError" : False,
                "response" : {
                    "result" : t.result() 
                }
            })
            
    except Exception as e:
        return json.dumps({
            "status" : True,
            "isError" : True,
            "statusCode" : "INTERNAL_SERVER_ERROR",
            "response" : {
                "result" : e
            }
        })
