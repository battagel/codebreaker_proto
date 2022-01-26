# https://blog.miguelgrinberg.com/post/how-to-create-a-react--flask-project

import time
from flask import Flask

app = Flask(__name__)

@app.route('/time')
def get_current_time():
    return {'time': time.time()}