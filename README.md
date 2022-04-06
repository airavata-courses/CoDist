## Merra-data-ingestion Service


Plotting Service
When pinged the API with the required parameters, will return the link to a visualized plot of that MERRA data for Temperature of lowest model layer metrix one of the attribute in the dataset. 
The total size of the data to be downloaded is around 60MB for a day(24 Hrs)


Tech And Resources
This Microservice uses:

Python
Flask
MERRA data: https://disc.gsfc.nasa.gov/datasets/M2I1NXLFO_5.12.4/summary?keywords=M2I1NXLFO
Installation
Create an .env with the help of example.env. All the required variables is in it.

This service is tested on Python 3.8 and will require this version for smooth operstions.

.env.example is given in the respository.

Install the libraries and dependencies and start the server.

cd respository_folder
pip install -r requirements.txt
python routes.py
The default Port is 5000 you can change it .env.

API
Requests
GET /ping
POST /plottingmerra

Responses
Data Params for post body

year=[string]
month=[string]
day=[string]
hour=[string]
minute=[string]
second=[string]
userId: [string] 

Example of POST request

{


"year": "2015", 

"month": "04",

"day": "4",

"hour": "3",

"minute":"3",

"second": "5",

"userId": "6f0f290ad7797435698"

}
  

Success Response:


Code: 200 Content:

{
    "isError": false,
    
    "response": {
    
        "result": {
        
            {
            
                "asset_id": "7db8cc7c5606edf3c42b17621d11f6bf",
                "bytes": 433222,
                
                "created_at": "2022-04-06T20:45:04Z",

                "format": "png",
                
                "height": 1440,
                
                "public_id": "Images/6f0f290ad7797w43568/2022-02-28",
                
                "resource_type": "image",
                
                "secure_url": "https://res.cloudinary.com/cvkunte/image/upload/v1649277904/Images/6f0f290ad7797w43568/2022-02-28.png",
                
                "type": "upload",
                
                "url": "http://res.cloudinary.com/cvkunte/image/upload/v1649277904/Images/6f0f290ad7797w43568/2022-02-28.png",
                
                "version": 1649277904,
                
                "width": 2880
            }
        }
    },
    
    "status": true
    
}


Attributes:
The response will have all the requried files and url for the images.

The url will have the public link to the uploaded image which is sent to the gateway.


This is generated when an internal error is generated due to unreadable file or not correct body. The isError will be true and the response will have a precomputed url


LINKS AND REFERENCES
https://disc.gsfc.nasa.gov/datasets/M2I1NXLFO_5.12.4/summary?keywords=M2I1NXLFO

https://disc.gsfc.nasa.gov/information/howto?title=How%20to%20read%20and%20plot%20NetCDF%20MERRA-2%20data%20in%20Python

https://disc.gsfc.nasa.gov/information/howto?title=How%20to%20read%20and%20plot%20NetCDF%20MERRA-2%20data%20in%20Python

When pinged the API with the required parameters, it will download the NetCD4 file, convert into CSV and then upload it on Amazon AWS S3 bucket.
The furhter processing for plotting will be done by plotting merra microservice. 



