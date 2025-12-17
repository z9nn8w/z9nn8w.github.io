import re

pattern = r'!=\d+'
result = ""
with open("which_sql/access.log") as f:
    lines = f.readlines()
    for line in lines:
        #print(line)
        r = (re.findall(pattern, line))
        if r != []:
            result += "".join(r)

        
with open('result.txt', 'w') as ff:
    ff.write(result)