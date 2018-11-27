import fdk
import json
import requests


def handler(ctx, data=None, loop=None):
    addresses = {
        "destinations": [
            "10450 Eastborne Ave. Los Angeles, CA 90403"
        ], 
        "origins": [
            "955 2nd St. Santa Monica, CA 90403"
        ],
    }
    req = requests.get('https://maps.googleapis.com/maps/api/distancematrix/json?origins=' + addresses['origins'][0] + '&destinations=' + addresses['destinations'][0] + '&key=')
    json_response = json.loads(req.content)
    return("timeInSecs: " + json.dumps(json_response['rows'][0]['elements'][0]['duration']['value']))

if __name__ == "__main__":
    fdk.handle(handler)

