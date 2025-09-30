from flask import Flask, jsonify, request
import requests

app = Flask(__name__)

@app.route('/validate', methods=['GET', 'POST'])
def validate():

    return jsonify({'valid': True}), 200

if __name__ == '__main__':
    app.run(host='0.0.0.0', port=7897, debug=True)
