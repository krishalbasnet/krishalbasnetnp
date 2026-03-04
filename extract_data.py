import re
import json
import os

try:
    with open('election_temp.js', 'r', encoding='utf-8') as f:
        content = f.read()

    # Find the pattern [{CandidateID:...}]
    match = re.search(r'\[\{CandidateID:.*?\}\]', content, re.DOTALL)
    if not match:
        # Fallback to a broader search if the above fails
        # Try to find the start of the array and count brackets
        start_idx = content.find('[{CandidateID:')
        if start_idx != -1:
            # Simple bracket balancer or just find the next '];' or something
            # Usually minified JS candidate list is a huge array
            end_idx = content.find('}]', start_idx) + 2
            data_str = content[start_idx:end_idx]
            match_found = True
        else:
            match_found = False
    else:
        data_str = match.group(0)
        match_found = True

    if match_found:
        print(f"Match found. Length: {len(data_str)}")
        # Save to raw_data.txt
        with open('raw_data.txt', 'w', encoding='utf-8') as f:
            f.write(data_str)
        
        # Try to convert to valid JSON (keys need quotes)
        # This is a bit tricky for minified JS but let's try a simple regex replace
        # {Key:Value -> {"Key":Value
        # This might be overkill if I can just use eval() in JS later
        # Actually, let's just keep it as is and wrap it as a JS file for index.html to load
        # Or I can try to make it valid JSON here.
    else:
        print("Candidate data array not found")
except Exception as e:
    print(f"Error: {e}")
