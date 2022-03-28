import requests
    
def fetchdata(getValue):

    domain = "https://goldsmr4.gesdisc.eosdis.nasa.gov/data/MERRA2/M2I1NXLFO.5.12.4/"
    year = getValue["year"]
    month = getValue["month"]
    day = getValue["day"]

    subdomain = year+"/"+month+"/"+"MERRA2_400.inst1_2d_lfo_Nx."+year+month+day+".nc4"

    URL = domain+subdomain

    # URL = 'https://goldsmr4.gesdisc.eosdis.nasa.gov/data/MERRA2/M2I1NXLFO.5.12.4/2022/01/MERRA2_400.inst1_2d_lfo_Nx.20220101.nc4'

    FILENAME = 'tryingHard'    
    result = requests.get(URL)
    try:
        result.raise_for_status()
        f = open(FILENAME,'wb')
        f.write(result.content)
        f.close()
        print('contents of URL written to '+FILENAME)
    except:
        print('requests.get() returned an error code '+str(result.status_code))


    # print(URL)
    return FILENAME