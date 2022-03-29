# #importing packages
# import numpy as np
# from scipy import interpolate
# from netCDF4 import Dataset
# from shapely.geometry import Point
# import geopandas as gpd
# from geopy.distance import geodesic
# import rasterio
# import matplotlib.pyplot as plt

# #load data 
# def dataConversion(file):
#     # file = '/home/daniel/Ellipsis/db/downloaded/rawtropomi/S5P_NRTI_L2__CO_____20190430T171319_20190430T171819_08006_01_010301_20190430T175151.nc'
#     rootgrp = Dataset(file, "r",format="NETCDF4")
#     lat = rootgrp.groups['PRODUCT']['latitude'][:]
#     lon = rootgrp.groups['PRODUCT']['longitude'][:]
#     carbon = rootgrp.groups['PRODUCT']['carbonmonoxide_total_column'][:]
#     carbon = carbon.filled(0)
#     lat = lat.filled(-1000)
#     lon = lon.filled(-1000)

#     carbon = carbon.flatten()
#     lat = lat.flatten()
#     lon = lon.flatten()

#     #calculate the real distance between corners and get the widht and height in pixels assuming you want a pixel resolution of at least 7 by 7 kilometers
#     w = max(geodesic((min(lat),max(lon)), (min(lat),min(lon))).meters/7000 , geodesic((max(lat),max(lon)), (max(lat),min(lon))).meters/14000)
#     h = geodesic((min(lat),max(lon)), (max(lat),max(lon))).meters/14000

#     # create a geopandas with as its rows the latitude, longitude an the measrument values. transfrom it to the webmercator projection (or projection of your choosing)
#     points = [Point(xy) for xy in zip(lon, lat)]
#     crs = {'init': 'epsg:4326'}
#     data = gpd.GeoDataFrame({'value':carbon}, crs=crs, geometry=points)
#     data = data.to_crs({'init': 'epsg:3395'})
#     data['lon'] = data.bounds['maxx'].values
#     data['lat'] = data.bounds['maxy'].values

#     #make grid of coordinates. You nee de calculate the coordinate of each pixel in the desired raster
#     minlon = min(data['lon'])
#     maxlon = max(data['lon'])
#     minlat = min(data['lat'])
#     maxlat = max(data['lat'])

#     lon_list = np.arange(minlon, maxlon, (maxlon-minlon)/w )
#     lat_list = np.arange(minlat, maxlat, (maxlat-minlat)/h)

#     lon_2d, lat_2d = np.meshgrid(lon_list, lat_list)



#     #use the values in the geopandas dataframe to interpolate values int the coordinate raster
#     r = interpolate.griddata(points = (data['lon'].values,data['lat'].values), values = data['value'].values, xi = (lon_2d, lat_2d))
#     r = np.flip(r, axis = 0)

#     #check result
#     plt.imshow(r)


#     #save raster
#     transform = rasterio.transform.from_bounds(south = minlat, east = maxlon, north =     maxlat, west = minlon, width = r.shape[1], height = r.shape[2]   )
#     file_out = 'test.tiff'
#     new_dataset = rasterio.open(file_out , 'w', driver='Gtiff', compress='lzw',
#                                         height = r.shape[1], width = r.shape[2],
#                                         count= r.shape[0], dtype=str( r.dtype),
#                                         crs=   data.crs,
#                                         transform= transform)
#     new_dataset.write(r)
#     new_dataset.close()



import xarray as xr 
import rioxarray as rio 

def dataConversion(file):

    nc_file = xr.open_dataset(file)
    bT = nc_file['TLML']
    print(bT)

    bT = bT.rio.set_spatial_dims('lon', 'lat')
    bT.rio.crs

    bT.rio.to_raster("medsea_bottomT_raster.tiff")
