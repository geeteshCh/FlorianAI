import boto3
import json

# Bedrock client
bedrock = boto3.client(
    'bedrock-runtime',
    region_name='us-west-2',
    aws_access_key_id="ASIAWWKGYXRWSU7YQ7OC",
    aws_secret_access_key="ty5kqc3h1dl/t4axc6245EA3udPG7F5G6GNv+zwQ",
    aws_session_token="IQoJb3JpZ2luX2VjEGoaCXVzLWVhc3QtMSJIMEYCIQDGnWQsWfjw94dFuf/Jp8i9RoHKq4/QXnG1pKtsIS5SFAIhAP56VS5XsiwSDohHtdGcdVVY6t9IERGa0+C3JeHdUYK7KqICCMP//////////wEQAhoMNDYwMjQ2NzkzMzI1IgyxlZOnMJSodlpupTsq9gH52u7yr9DTX42fy5ZqhaoBKaEkJJfj/RocN0h1wS2ozCkXAsVFMGC36RksAGsX4vm3Eymu8wk2uD22SG3+RBwfiUpcg95xJmUEIDql6N/qZbEKck8QxehqvWmfvTYgP7CPFfbqP6vCeACRhlyCR4pQLxLLshZ8ZxC+gUu5zAAsOuXFsr35XWvVJy2M/lt3DGmTpu47RsqiVTcYg6BuH4+hYurX9AoeWgu6Leq4krSJrBuHROh9tqiEMJZbAa8zMmEFiB+KfkVxxha08voGQG+Mu1MpagDU1WYp7fM/xskS+fg23SF77FDl1L3pKMLQ2/p4jgG8NR8wrfP7vgY6nAFiEmIQHUQ1yLaNn+itoZpq0LkkdV+ewzpS56vv+mZKR87rO2+3I2wg8cxb/JqoKX5Yh99JFV2onOgLZhkJDFkJB8qOzgpIVtcUuif0W4QEPX/6lU0UqTYz5GOdQ0XC4Syx/54jQ8ZDmedHI/1V9/Hts5pFwN5UKqfBvYiqCKetWoQJ22AcsjBLwoDF86fqYcmyFWf3UJeWSS6CtSI="
)


model_id = "amazon.nova-pro-v1:0"

# Claude 3 required input format
body = json.dumps({
    "anthropic_version": "bedrock-2023-05-31",
    "messages": [
        {
            "role": "user",
            "content": "Explain quantum computing in simple terms."
        }
    ],
    "max_tokens": 500
})

response = bedrock.invoke_model(
    modelId=model_id,
    contentType="application/json",
    accept="application/json",
    body=body
)

# Parse response
response_body = json.loads(response['body'].read())
print(response_body["content"][0]["text"]) 
