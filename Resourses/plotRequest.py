from flask_restful import Resource
from flask import jsonify, request
from Resourses.ingester import fetchdata
from Resourses.plotdata import plot
from Resourses.uploadImage import upload_file

class plotData(Resource):
    def get(self):
        return "Ping pong"
    
    def post(self):
        getData = request.get_json()
        year = getData["year"]
        month = getData["month"]
        day = getData["day"]
        station = getData["station"]
        hour = getData["year"]
        minute = getData["minute"]
        second = getData["second"]

        getValue = {
            "year" : year,
            "month" : month,
            "day" : day,
            "station" : station,
            "hour" : hour,
            "minute" : minute,
            "second" : second
        }

        file = fetchdata(getValue)
        print('geting file: ', file) 
        image = plot('tryingHard')
        response = upload_file(image)

        # retValue = {
        #     "year" : year,
        #     "month" : month,
        #     "day" : day,
        #     "station" : station,
        #     "hour" : hour,
        #     "minute" : minute,
        #     "second" : second,
        #     "URL" : file
        # }

        


        return jsonify(response)