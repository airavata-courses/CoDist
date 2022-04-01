from flask import Flask
from flask_restful import Api, Resource
from Resourses.plotRequest import plotData
from Resourses.producer import start_producer
from dotenv import load_dotenv
import os
from getPath import getEnvPath

load_dotenv(getEnvPath())

if __name__ == '__main__':
    app = Flask(__name__)
    api = Api(app)
    start_producer()
    api.add_resource(plotData, '/plottingmerra')
    app.run(port= os.getenv("FLASK_PORT") or 5051, debug=True )

