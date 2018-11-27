import fdk
import json
import requests


def handler(ctx, data=None, loop=None):
 
    req = requests.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=40.6655101,-73.89188969999998&destinations=40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.6905615%2C-73.9976592%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626%7C40.659569%2C-73.933783%7C40.729029%2C-73.851524%7C40.6860072%2C-73.6334271%7C40.598566%2C-73.7527626&key=AIzaSyD27N9mxT47VEQ3MX80dZZJa4_HdczBd_4')
    json_response = json.loads(req.content)
    return("duration: " + json.dumps(json_response['rows'][0]['elements'][0]['duration']))

if __name__ == "__main__":
    fdk.handle(handler)

