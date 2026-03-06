import json
import os

file_path = r'd:\krishalbasnetnp\Election\data.json'
if not os.path.exists(file_path):
    print(f"Error: {file_path} not found")
    exit(1)

try:
    with open(file_path, 'r', encoding='utf-8') as f:
        data = json.load(f)

    if 'prData' in data:
        # Set RSP votes to 100
        data['prData']["राष्ट्रिय स्वतन्त्र पार्टी"] = 100
        with open(file_path, 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=4, ensure_ascii=False)
        print("Successfully updated RSP votes to 100")
    else:
        print("prData key not found in data.json")
except Exception as e:
    print(f"An error occurred: {e}")
