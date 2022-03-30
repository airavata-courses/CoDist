import requests
from Resourses.dataConversion import dataConversion
    
def fetchdata(getValue):
    print("Fetching data...")

    domain = "https://goldsmr4.gesdisc.eosdis.nasa.gov/data/MERRA2/M2I1NXLFO.5.12.4/"
    year = getValue["year"]
    month = getValue["month"]
    day = getValue["day"]
    hour = getValue["hour"]

    subdomain = year+"/"+month+"/"+"MERRA2_400.inst1_2d_lfo_Nx."+year+month+day+".nc4"

    URL = domain+subdomain
    
    FILENAME = year+"-"+month+"-"+day+"-"+"T"+hour+".nc4"
    result = requests.get(URL)
    try:
        result.raise_for_status()
        f = open(FILENAME,'wb')
        f.write(result.content)
        f.close()
        print('contents of URL written to '+FILENAME)
    except:
        print('requests.get() returned an error code '+str(result.status_code))

    
    return FILENAME