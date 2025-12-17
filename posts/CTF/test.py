import base64

s1 = b"dGVzdA=="
s2 = b"dGVzdA==AAABBBCCCDDD1234567890"

print(base64.b64decode(s1)) # b'test'
print(base64.b64decode(s2)) # b'test'