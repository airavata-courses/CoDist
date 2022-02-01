from random import SystemRandom
from flask import Flask, jsonify, request
from pydantic import BaseModel
import asyncio
import json
from Plotting import getPlottingDataController



app = Flask(__name__)


class getPlottedDataBody(BaseModel):
    year : str
    month : str
    day : str
    station : str
    hour : str
    minute : str
    second : str

@app.route("/ping")
async def root():
    return jsonify({ "ping" : "PONG"})


incomes = [
  { 'description': 'salary', 'amount': 5000 }
]

@app.route('/getFunctionCall', methods=['POST'])
def getFunctionCall():
    return '''
              <h1>The language value is: {}</h1>
              '''.format(request.get_json())

@app.route('/getPlottedData', methods=['POST'])
async def getPlottedData():
    # print("WE are here",requestBody)
    try:
        done,pending = await asyncio.wait([getPlottingDataController(dict(request.get_json()))])
        # return result
        for t in done:
            return ({
                "status" : True,
                "isError" : False,
                "response" : {
                    "result" : t.result() 
                }
            })
            
    except Exception as e:
        return({
            "status" : True,
            "isError" : True,
            "statusCode" : "INTERNAL_SERVER_ERROR",
            "response" : {
                "result" : e
            }
        })
if __name__ == "__main__":
    app.run()