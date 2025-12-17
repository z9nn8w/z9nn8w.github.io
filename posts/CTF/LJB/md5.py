import re

phoneno = r'\d{11}'
imei = r'\d{15}'
ipv4 = r'\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}'
email = r' .+@.+\..+'

with open("mixed_sensitive_data.txt", "r") as f:
    data = f.read()
    email_list = re.findall(email, data)

print(email_list)
