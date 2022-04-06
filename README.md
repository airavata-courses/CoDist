# CoDist
Spring 2022 Project


dockerChangesMerraPlotting service
This service receives request by the merra-data ingestion using the rabbitMQ messaging service, the request specifies the name of the file by which
data is stored in csv format in S3 bucket and the userId to store the plotted image in cloudinary. The whole response received after storing the image in cloudinary
will be then sent to ingester service which will then be sent to the UI via gateway. 
Tech And Resources This Microservice uses:

This service is tested on Python 3.8 and will require this version for smooth operstions.
.env.example is given in the respository.
Install the libraries and dependencies and start the server.
pip install -r requirements.txt python routes.py The default Port is 5000 you can change it .env.

Installation steps:
1. Create virtual environment with conda python 3.8
> conda create -n mypython3 python=3.8
2. Install libraries.(Execute below in the folder which consists requirement.txt)
> pip install -r requirements.txt
3. Also install cartopy using conda 
> conda install -c conda-forge cartopy
4. Execute below to start the consumer(Make sure you have data ingestion service running before you start plotting service) 
5. > python -m consumer.py


REQUEST and RESPONSE:


REQUEST:
receives message in plotting queue which contains the file name of csv stored in csv and the username of the user.

body:
{

    objectName: string
    userId: string

}

The CSV file with name= objectName, will be fetched from S3 bucket and processed to plot the image. The plotted image will be uploaded to cloudinary
in folder Images/username/imagename.png. The response will be the entire object received from cloudinary.


RESPONSE:

body:
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


Attributes: 

The response will have all the details about the file uploaded on cloudinary and url for the images.

The url will have the public link to the uploaded image which is sent to the gateway.

LINKS AND REFERENCES 

https://disc.gsfc.nasa.gov/information/howto?title=How%20to%20read%20and%20plot%20NetCDF%20MERRA-2%20data%20in%20Python

https://disc.gsfc.nasa.gov/information/howto?title=How%20to%20read%20and%20plot%20NetCDF%20MERRA-2%20data%20in%20Python
