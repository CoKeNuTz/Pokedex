import requests, json, logging
logging.basicConfig(level=logging.INFO)
import constants

evolution_cache = {}

def get_Evolution(url):
    if url not in evolution_cache.keys():
        logging.info("Evolution cache miss")
        evolution_cache[url] = new_evolution(url)
    return evolution_cache[url]
    
def new_evolution(url):
    evolution_details = []

    evolution_response = requests.get(url, headers=constants.HEADERS)
    evolution_json = json.loads(evolution_response.text)
    
    evolution_details.append({ "id": evolution_json[constants.CHAIN][constants.SPECIES][constants.URL].split('/')[6], "index": 0, "parent": None })
    evolution_details += flatten_evolves_to(evolution_json[constants.CHAIN][constants.EVOLVES_TO], evolution_json[constants.CHAIN][constants.SPECIES][constants.URL].split('/')[6], 1 )
    
    return evolution_details

def flatten_evolves_to(evolves_to, parent, index):
    evolution_details = []
    if len(evolves_to) == 0:
        return evolution_details
    for iter in evolves_to:
        evolution_details.append({ "id": iter[constants.SPECIES][constants.URL].split('/')[6], "parent": parent, "index": index })
        evolution_details += flatten_evolves_to(iter[constants.EVOLVES_TO], iter[constants.SPECIES][constants.URL].split('/')[6], index + 1 )
    
    return evolution_details