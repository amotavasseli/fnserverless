import fdk
import json
import requests


def handler(ctx, data=None, loop=None):
 
    req = requests.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=Los Angeles&destinations=Irvine&key=AIzaSyD27N9mxT47VEQ3MX80dZZJa4_HdczBd_4')
    json_response = json.loads(req.content)
    return("rows: " + json.dumps(json_response['rows'][0]['elements'][0]['duration']['value']))

if __name__ == "__main__":
    fdk.handle(handler)

