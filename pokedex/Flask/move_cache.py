import requests, json, logging
logging.basicConfig(level=logging.INFO)
from utilities import get_English
import constants

move_cache = {}

def get_Move(url):
    if url not in move_cache.keys():
        logging.info("Move cache miss")
        move_cache[url] = new_move(url)
    return move_cache[url]
    
def new_move(url):
    move_response = requests.get(url, headers=constants.HEADERS)
    move_json = json.loads(move_response.text)
    
    return {"name": move_json[constants.NAME], "power": move_json[constants.POWER], "description": get_English(move_json[constants.FLAVOR_TEXT_ENTRIES], constants.FLAVOR_TEXT)}

