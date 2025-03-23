from flask import Flask, request, jsonify
from flask_cors import CORS
import threading
from llm import generate_data

app = Flask(__name__)
CORS(app)


def run_llm(data):
    
    print("🚀 Starting LLM with data in background")
    print(data)
    message_data = [item for item in data 
                     if item.get('type') in ('user_message', 'assistant_message')]
    print("🚀 message data")
    print(message_data)
    content_data = [msg["message"]["content"] for msg in message_data]

    # 3. Join all content strings together with a newline between them
    combined_string = "\n".join(content_data)
    print("🚀 combined list")
    print(combined_string)
    llm_output = generate_data(data, combined_string)
    print("🚀 combined list")
    print(llm_output)



@app.route("/messages", methods=["POST"])
def messages():
    data = request.json
    print("📥 Received messageLog from frontend:")
    print(data)

    # Spawn a new thread to handle data in the background
    thread = threading.Thread(target=run_llm, args=(data,))
    thread.start()
    return jsonify({"status": "ok", "message_count": len(data)})


app.run(debug=True, port=5000)
