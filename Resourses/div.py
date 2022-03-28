from email import message
from flask_restful import Resource
from flask import jsonify, request

class division(Resource):
    def get(self):
        return "In div get"
    def post(self):

        getData = request.get_json()

        a = int(getData["a"])
        b = int(getData["b"])
        
        c = a/b

        retValue = {
            "message" : c,
            "Status code" : 200
        }



        return jsonify(retValue)