import fdk
import json
import requests


def handler(ctx, data=None, loop=None):
 
    req = requests.get('http://pokeapi.co/api/v2/pokemon/1/')
    json_response = json.loads(req.content)
    return("Pokemon Name: " + json_response['name'])

if __name__ == "__main__":
    fdk.handle(handler)

