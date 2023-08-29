import requests, json, logging, random
logging.basicConfig(level=logging.INFO)
from evolution_cache import get_Evolution
from move_cache import get_Move
from utilities import get_English
import constants

pokemon_cache = {}

def weakness_Map(value):
    switcher = {
        "normal": "fighting",
        "fighting": "fairy",
        "flying": "rock",
        "poison": "ground",
        "ground": "grass",
        "rock": "steel",
        "bug": "flying",
        "ghost": "dark",
        "steel": "fighting",
        "fire": "water",
        "water": "electric",
        "grass": "fire",
        "electric": "ground",
        "psychic": "bug",
        "dark": "fairy",
        "fairy": "poison",
        "ice": "fire",
        "dragon": "fairy",
        "unknown": "unknown",
    }

    return switcher.get(value, constants.NULL)

def resistance_Map(value):
    switcher = {
        "normal": "ghost",
        "fighting": "rock",
        "flying": "fighting",
        "poison": "fairy",
        "ground": "electric",
        "rock": "normal",
        "bug": "psychic",
        "ghost": "normal",
        "steel": "rock",
        "fire": "grass",
        "water": "fire",
        "grass": "ground",
        "electric": "flying",
        "psychic": "fighting",
        "dark": "ghost",
        "fairy": "dragon",
        "ice": "water",
        "dragon": "ground",
        "unknown": "unknown",
    }

    return switcher.get(value, constants.NULL)

def get_Pokemon(id):
    if id not in pokemon_cache.keys():
        logging.info("Pokemon cache miss")
        pokemon_cache[id] = new_pokemon(id)
    return pokemon_cache[id]
    
def new_pokemon(id):
    pokemon = {}

    species_response = requests.get("https://pokeapi.co/api/v2/pokemon-species/{}".format(id), headers=constants.HEADERS)
    species_json = json.loads(species_response.text)

    pokemon_response = requests.get("https://pokeapi.co/api/v2/pokemon/{}".format(id), headers=constants.HEADERS)
    pokemon_json = json.loads(pokemon_response.text)

    pokemon["characteristics"] = { 
        "name": species_json[constants.NAME],
        "sprite": pokemon_json[constants.SPRITES][constants.FRONT_DEFAULT],
        "id": id,
        "description": get_English(species_json[constants.FLAVOR_TEXT_ENTRIES], constants.FLAVOR_TEXT),
        "isLegendary": species_json[constants.IS_LEGENDARY],
        "height": pokemon_json[constants.HEIGHT],
        "weight": pokemon_json[constants.WEIGHT],
        "genus": get_English(species_json[constants.GENERA], constants.GENUS),
        "color": species_json[constants.COLOR][constants.NAME],
        "habitat": None if species_json[constants.HABITAT] == None else species_json[constants.HABITAT][constants.NAME]
    }

    pokemon["types"] = {
        "main": [],
        "weaknesses": [],
        "resistances": []
    }

    for iter in pokemon_json[constants.TYPES]:
        pokemon["types"]["main"].append(iter[constants.TYPE][constants.NAME])
        pokemon["types"]["weaknesses"].append(weakness_Map(iter[constants.TYPE][constants.NAME]))
        pokemon["types"]["resistances"].append(resistance_Map(iter[constants.TYPE][constants.NAME]))

    pokemon["stats"] = {
        "hp": pokemon_json[constants.STATS][0][constants.BASE_STAT],
        "attack": pokemon_json[constants.STATS][1][constants.BASE_STAT],
        "defense": pokemon_json[constants.STATS][2][constants.BASE_STAT],
        "specialattack": pokemon_json[constants.STATS][3][constants.BASE_STAT],
        "specialdefense": pokemon_json[constants.STATS][4][constants.BASE_STAT],
        "speed": pokemon_json[constants.STATS][5][constants.BASE_STAT]
    }

    pokemon["evolutionchain"] = get_Evolution(species_json[constants.EVOLUTION_CHAIN][constants.URL])

    pokemon["capabilities"] = { "ability": {"name": pokemon_json[constants.ABILITIES][0][constants.ABILITY][constants.NAME]} }
    
    ability_response = requests.get(pokemon_json[constants.ABILITIES][0][constants.ABILITY][constants.URL], headers=constants.HEADERS)
    ability_json = json.loads(ability_response.text)
    
    pokemon["capabilities"]["ability"]["description"] = get_English(ability_json[constants.FLAVOR_TEXT_ENTRIES], constants.FLAVOR_TEXT)
    pokemon["capabilities"]["moves"] = []
    sample_moves = pokemon_json["moves"]
    if len(pokemon_json[constants.MOVES]) > 4:
        sample_moves = random.sample(pokemon_json[constants.MOVES], 4)
    for move in sample_moves:
        pokemon["capabilities"]["moves"].append(get_Move(move[constants.MOVE][constants.URL]))
       
    return pokemon

