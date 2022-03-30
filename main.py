from flask import Flask
from flask_restful import Api, Resource
from Resourses.plotRequest import plotData
from Resourses.producer import start_producer

app = Flask(__name__)
api = Api(app)
start_producer()
api.add_resource(plotData, '/plottingmerra') 

if __name__ == '__main__':
    app.run(debug=True)
