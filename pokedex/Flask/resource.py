from flask import Flask, request
from flask_cors import CORS, cross_origin
from pokemon_cache import get_Pokemon
from allpokemon_cache import get_allpokemon

resource = Flask(__name__)
cors = CORS(resource)
resource.config['CORS_HEADERS'] = 'Content-Type'

@resource.route("/pokemon")
@cross_origin()
def viewpokemon():
    id = request.args.get("id", type=int)
    return get_Pokemon(id)

@resource.route("/all-pokemon")
@cross_origin()
def viewallpokemon():
    return get_allpokemon()

if __name__ == "__main__":
    resource.run(debug=True)