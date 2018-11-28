import fdk
import json
import requests


def handler(ctx, data=None, loop=None):
    addresses = {
        "destinations": [
            "10450 Eastborne Ave. Los Angeles, CA 90403","3730 may st Los Angeles, Ca 90066"
        ], 
        "origins": [
            "955 2nd St. Santa Monica, CA 90403"
        ],
    }
    
    destination = "" #contains our appended string for api Call
    count = 0
    for i in addresses['destinations']:
        if(count > 0) :
            destination += "|"
        destination += i
        count +=1
    


    req = requests.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + addresses['origins'][0] + '&destinations=' + destination + '&key=AIzaSyD27N9mxT47VEQ3MX80dZZJa4_HdczBd_4')
    json_response = json.loads(req.content)
    return("timeInSecs: " + json.dumps(json_response['rows'][0]['elements']))

if __name__ == "__main__":
    fdk.handle(handler)

