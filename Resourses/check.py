
# import requests
# from rasterio.plot import show

# import rasterio as rio


# result = requests.get("https://res.cloudinary.com/cvkunte/image/upload/v1648595816/folder1/tryingHard1_hggyr7.tiff")
# # print(result.content)


# try:
#     result.raise_for_status()
#     f = open('xyz','wb')
#     f.write(result.content)
#     f.close()
#     print('contents of URL written to '+'xyz')
#     img = rio.open('xyz')
#     show(img)

    # with rio.open(img) as infile:
        # print("Here")
        # profile=infile.profile
        # #
        # # change the driver name from GTiff to PNG
        # #
        # profile['driver']='PNG'
        # #
        # # pathlib makes it easy to add a new suffix to a
        # # filename
        # #    
        # png_filename=img.with_suffix('.png')
        # raster=infile.read()
        # with rio.open(png_filename, 'w', **profile) as dst:
        #     dst.write(raster)
        # #
        # # now do jpeg
        # #
        # profile['driver']='JPEG'
        # jpeg_filename=img.with_suffix('.jpeg')
        # with rio.open(jpeg_filename, 'w', **profile) as dst:
        #     dst.write(raster)



# except:
#     print('requests.get() returned an error code '+str(result.status_code))

# from PIL import Image


# im = Image.open('xyz')
# # print("new filename : " + outfile)
# outfile = im[:-3]  + "jpeg"
# out = im.convert("RGB")
# out.save('outfile', "PNG", quality=90)

# from netCDF4 import Dataset

# data = Dataset('2021-05-14-T2', mode='r')
# print(data)
# lons = data.variables['lon'][:]
# lats = data.variables['lat'][:]
# T2M = data.variables['TLML'][:,:,:]
# T2M = T2M[23,:,:]


# print(len(lons))
# print(len(lats))
# print(len(T2M[0]))

# import numpy as np 
# import matplotlib.pyplot as plt

# H = np.array(T2M)

# fig = plt.figure(figsize=(8,4))

# plt.imshow(H, interpolation='none')
# plt.show()
# fig.savefig('foo.png', format='png', dpi=360)



# # import numpy
# # a= [[1,2,3,4],[5,6,7,8]]
# np.savetxt('output.csv',H,delimiter=",")


import pandas as pd
import matplotlib.pyplot as plt

# plt.rcParams["figure.figsize"] = [7.50, 3.50]
# plt.rcParams["figure.autolayout"] = True

# headers = ['Name', 'Age', 'Marks']

# df = pd.read_csv('output.csv')
# df.plot()
# plt.show()

# load numpy array from csv file
# from numpy import loadtxt
# # load array
# data = loadtxt('output1'+'.csv', delimiter=',')
# # print the array
# print(data)

# fig = plt.figure(figsize=(8,4))
# plt.imshow(data, interpolation='none')
# plt.show()
# fig.savefig('foo1.png', format='png', dpi=360)


# print(T2M)


# import xarray as xr 

# nc_file = xr.open_dataset('2021-05-14-T2')
# bT = nc_file['TLML']
# # hour = int(hour)
# b = bT[0]
# b = b.rio.set_spatial_dims('lon', 'lat')        
# # b.rio.crs

# print(b[0])

s = "chinmay.csv"
print(s)
print(s[:-4])
