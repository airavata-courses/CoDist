from os import PRIO_USER
from random import SystemRandom
from fastapi import FastAPI
from pydantic import BaseModel
import asyncio

from plottimgDemo import getPlottingDataController

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
    result = await asyncio.wait([getPlottingDataController(dict(requestBody))])
    # return result
    print("result hereeee==", result )
    return { "message" : "Hello World"}