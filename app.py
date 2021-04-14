from flask import Flask, render_template, url_for, jsonify, request

import translate

app=Flask(__name__)

app.config['JSON_AS_ASCII'] = False

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/traductor')
def hello():
    return render_template('traductor.html')

@app.route('/translate-text', methods=['POST'])
def traductor_text():
    data = request.get_json()
    text_input = data['text']
    translation_output = data['to']
    response = translate.get_translation(text_input,translation_output)
    print(response)
    return jsonify(response)


