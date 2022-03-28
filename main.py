from flask import Flask
from flask_restful import Api, Resource
# from myapi.resources.foo import Foo
# from myapi.resources.bar import Bar
# from myapi.resources.baz import Baz
# from Resourses.div import division
# from Resourses.sub import subtract
# from Resourses.mul import multiply
from Resourses.plotRequest import plotData
# from Resourses.plotdata import landingPage

app = Flask(__name__)
api = Api(app)


# api.add_resource(landingPage, '/')
# api.add_resource(division, '/div')
api.add_resource(plotData, '/plottingmerra') 
# api.add_resource(multiply, '/mul')
# api.add_resource(subtract, '/sub')


if __name__ == '__main__':
    app.run(debug=True)
