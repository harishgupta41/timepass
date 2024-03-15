from flask import Flask,redirect,render_template,request
from flask_socketio import SocketIO
import pandas as pd
import time

# import mysql.connector

# mydb = mysql.connector.connect(
#     host="localhost",
#     database="veritasX",
#     user="harry",
#     password="dl3san3581"
# )
# cursor = mydb.cursor()


app=Flask(__name__)
socketio=SocketIO(app)

@app.route('/')
@app.route('/home')
def home():
    return render_template('homepg.html',title='home-pg')

@app.route('/login')
def login():
    return render_template('login.html',title="login-pg")

@app.route('/registration')
def registration():
    return render_template('registration.html',title='registration-pg')

# @app.route('/user_login')
# def user_login():
#     if request.method=='POST':
#         username=request.form['username']
#         passwd=request.form['passwd']
#         cursor.execute()
#         return redirect('/')

@app.route('/mySoftware')
def mySoftware():
    return render_template('mysoftware.html',title='mysoftware')

@socketio.on('connect')
def handle_connect():
    # Read data from CSV file
    data = pd.read_csv('readings.csv')

    # Assuming you have two columns: 'X' and 'Y'
    # Replace them with your column names if needed
    x_values = data['Sensor 1'].tolist()
    y_values = data['Sensor 2'].tolist()

    socketio.emit('initial_data', {'x_values': x_values, 'y_values': y_values})

    # Simulate live updates by sending new data every second
    for i in range(len(x_values), len(x_values) + 10):
        time.sleep(0.5)  # Simulate some delay
        socketio.emit('new_data', {'x': i, 'y': i })


if __name__=='__main__':
    socketio.run(app, debug=True)