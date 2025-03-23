from flask import Flask, request, jsonify
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/messages", methods=["POST"])
def messages():
    data = request.json
    print("📥 Received messageLog from frontend:")
    print(data)
    return jsonify({"status": "ok", "message_count": len(data)})

if __name__ == "__main__":
    app.run(debug=True, port=5000)
