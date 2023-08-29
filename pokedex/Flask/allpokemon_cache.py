import requests, json, logging
logging.basicConfig(level=logging.INFO)
import constants

allpokemon_cache = []

def get_allpokemon():
    if len(allpokemon_cache) > 0:
        return allpokemon_cache
    url = "https://pokeapi.co/api/v2/pokemon?limit=1010&offset=0"
    logging.info("Loading all pokemon...")

    allpokemon_response = requests.get(url, headers=constants.HEADERS)
    allpokemon_json = json.loads(allpokemon_response.text)

    for iter in allpokemon_json[constants.RESULTS]:
        if { "id": iter[constants.URL].split('/')[6], "name": iter[constants.NAME] } not in allpokemon_cache:  
            allpokemon_cache.append({ "id": iter[constants.URL].split('/')[6], "name": iter[constants.NAME] })

    return allpokemon_cache