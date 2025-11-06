from flask import Flask
app = Flask(__name__)

@app.route('/')
def home():
    return "Привет из облака!"

if __name__ == "__main__":
    app.run()