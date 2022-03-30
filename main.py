from flask import Flask
from flask_restful import Api, Resource
from Resourses.plotRequest import plotData

app = Flask(__name__)
api = Api(app)

api.add_resource(plotData, '/plottingmerra') 

if __name__ == '__main__':
    app.run(debug=True)
