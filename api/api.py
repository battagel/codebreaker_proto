import time
from flask import Flask, jsonify, request
from flask_cors import CORS
import random

app = Flask(__name__, static_folder='../build', static_url_path='/')

CORS(app)

num_colours = 6

@app.errorhandler(404)
def not_found(e):
    return app.send_static_file('index.html')

@app.route('/')
def index():
    return app.send_static_file('index.html')


@app.route('/api/code-breaker')
def home():
    code = gen_random_code()
    colour_code = code_to_colour(code)

    return {"code": code, "hidden": True}

def gen_random_code(length=5):
    """ 
        Generates a random 5 number combination for later use

        RETURNS - list of values from length  
    """

    code = []

    for _ in range(0,length):
        code.append(random.randint(1,num_colours))
    
    print(f"Generated code {code}")
    return code

def code_to_colour(code):
    """
        Changes an integer list into a colour list
    """
    colour_map = {
        1: "#ffffff",
        2: "#000000",
        3: "#FF0000",
        4: "#00FF00",
        5: "#0000FF",
        6: "#FFFF00",
        7: "#FF00FF",
        8: "#00FFFF"
    }

    colour_code = []
    for digit in code:
        colour_code.append(colour_map[digit])

    print(f"Converted code:{code} to {colour_code}")
    return colour_code

@app.route("/api/check_guess", methods=["POST"])
def check_guess():
    """
    Checks the guess of the user against the correct code

    RETURNS: Tuple with number of blacks, number of whites
    """
    guess = request.json["guess"]
    code = request.json["code"]

    num_blacks = 0
    num_whites = 0

    for pos in range(0,len(code)):
        if guess[pos] == code[pos]:
            num_blacks += 1
            guess[pos], code[pos] = "B" "B"
    for posA in range(0, len(code)):
        for posB in range(0, len(code)):
            if code[posA] == guess[posB] and code[posA] != "B" and code[posA] != "W":
                num_whites += 1
                pos_in_code = code.index(guess[posB])
                guess[posB], code[pos_in_code] = "W", "W"
    
    return jsonify({"blacks": num_blacks, "whites": num_whites})  