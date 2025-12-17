import re

result = ""
with open("attachments/auth.log") as f:
    lines = f.readlines()
    for line in lines:
        if "Failed password" not in line and "127.0.0.1" not in line:
            result += line

        
with open('result.txt', 'w') as ff:
    ff.write(result)