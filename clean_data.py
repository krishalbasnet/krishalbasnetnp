import re
import json

def clean_data():
    try:
        with open('raw_data.txt', 'r', encoding='utf-8') as f:
            raw = f.read()
        
        # Regex to quote keys: find keys that are not quoted
        # e.g. CandidateID: -> "CandidateID":
        # This regex looks for word characters followed by a colon
        # but NOT preceded by a quote
        cleaned = re.sub(r'([{,])\s*([a-zA-Z0-9_]+)\s*:', r'\1"\2":', raw)
        
        # Handle values that might be null or unquoted strings? 
        # Minified JS usually quotes strings. null/true/false stay as is.
        # Let's hope the strings are already quoted.
        
        # Parse it to verify
        data = json.loads(cleaned)
        
        with open('Election/data.json', 'w', encoding='utf-8') as f:
            json.dump(data, f, indent=2, ensure_ascii=False)
        
        print(f"Successfully cleaned and saved {len(data)} candidates to Election/data.json")
        
    except Exception as e:
        print(f"Error: {e}")
        # If it fails, let's at least see the first 100 chars of cleaned
        try:
             print("Sample of cleaned data:", cleaned[:200])
        except:
             pass

if __name__ == "__main__":
    clean_data()
