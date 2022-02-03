from random import SystemRandom
from flask import Flask, jsonify, request
from pydantic import BaseModel
import asyncio
import json
from Plotting import getPlottingDataController
import json


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
    return jsonify({ "ping" : "PONG,BING BONG"})


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
        # print("Exception raised: ", e)
        return({
            "status" : True,
            "isError" : True,
            "statusCode" : "INTERNAL_SERVER_ERROR",
            "response" : {
                "result" : str(e)
            }
        })


if __name__ == "__main__":
    app.run()

# {'month': '2', 'hour': '0', 'year': '2022', 'station': 'KABX', 'day': '1', 'minute': '1', 'second': '31'}
# {'month': '2', 'hour': '12', 'year': '2022', 'station': 'KABX', 'day': '1', 'minute': '1', 'second': '31'}
