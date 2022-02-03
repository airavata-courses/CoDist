from logging import raiseExceptions
from random import SystemRandom
from flask import Flask, jsonify, request
from pydantic import BaseModel
import asyncio
import json
from Plotting import getPlottingDataController
import json
from flask_inputs import Inputs
from flask_inputs.validators import JsonSchema

app = Flask(__name__)

schema = {
    "year" : 'str',
    "month" : 'str',
    "day" : 'str',
    "station" : 'str',
    "hour" : 'str',
    "minute" : 'str',
    "second" : 'str'
}
class getPlottedDataBodyInputs(Inputs):
    json = [JsonSchema(schema=schema)]

@app.route("/ping")
async def root():
    return jsonify({ "ping" : "PONG,BING BONG"})

@app.route('/getPlottedData', methods=['POST'])
async def getPlottedData():
    # print("WE are here",requestBody)
    try:
        # inputs = getPlottedDataBodyInputs(request)
        # if inputs.validate():
        #     return jsonify(success=False, errors=inputs.errors)

        done,pending = await asyncio.wait([getPlottingDataController( dict(request.get_json())  )])
        # return result
        print("done Object is: ", done)
        for t in done:
            if t.result() == None:
                raise Exception
        for t in done:
                    return ({
                        "status" : True,
                        "isError" : False,
                        "response" : {
                            "result" : t.result() 
                        }
                    })
                
    except Exception as e:
        print("Exception raised: ", e)
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