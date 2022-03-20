from flask import Flask,jsonify, request,json
from flask_cors import CORS
import joblib


app = Flask(__name__)
CORS(app)

text='Hello world'
result='dont know'

@app.route('/predict',methods = ['POST','GET'])
def prediction():
    request_data = request.data
    text = request_data
    result=predict_suicide(text)
    return predict_suicide(text)

@app.route('/home',methods = ['GET'])
def hello():
    return text


@app.route('/result',methods=['GET'])
def result():
    return result



pipl_lr = joblib.load(
    open('Back-end\lr_model.pkl', 'rb'))


def predict_suicide(snt):
    results = pipl_lr.predict([snt])
    return results[0]


if __name__ == "__main__":
    app.run(debug=True)