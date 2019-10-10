from flask import Flask, url_for, request, json, Response, jsonify
from flask_cors import CORS, cross_origin
from Blind import movies_func

app = Flask(__name__)
CORS(app)

@app.route("/", methods = ['GET'])
def index():

    note = {
        "success": True,
        "message": "working"
    }

    resp = jsonify(note)
    return resp


@app.route("/api/blindCheckMovie/<movie>", methods = ['GET'])
def blindCheck(movie):
    result = movies_func(movie)

    return jsonify({
        "success": True,
        "Accuracy": result 
    })

if __name__ == "__main__":
    app.run()
