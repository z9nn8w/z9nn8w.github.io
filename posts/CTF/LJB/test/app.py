from flask import Flask, request, abort, make_response
import json

# 实例化app
app = Flask(import_name=__name__)

@app.route('/bot', methods=["GET"])
def bot():
    data = {
    "code": "AD-000000",
    "message": "",
    "detail": "",
    "timestamp": 1712106200.866157,
    "data": {
        "total": 4,
        "list": [
            {
                "resource_id": "e5dc3ee77e7a0f501766f64062eab111",
                "name": "question1",
                "direction": "PWN",
                "score": 1000,
                "solved": 1,
                "is_solved": True,
                "attachment": [
                    {
                        "name": "1.zip",
                        "url": "/ct/upload/other/db3a745b3bab5df9bfa100b453dff08a.zip",
                        "md5": "60943bcd53b0df14ed9881a3c58c31fd"
                    }
                ],
                "has_scene": True,
                "scene_status": 1,
                "scene_addresses": [
                    {
                        "protocol": "http",
                        "access_ip": "10.100.4.1",
                        "access_port": 40892
                    }   
                ]
            },
            {
                "resource_id": "24583c5bb4a05b86e3eaffd52c05458b",
                "name": "db",
                "online": True,
                "direction": "web",
                "score": 1,
                "solved": 1,
                "is_solved": True,
                "attachment":[
                    {
                        "name": "1.zip",
                        "url": "/ct/upload/other/db3a745b3bab5df9bfa100b453dff08a.zip",
                        "md5": "60943bcd53b0df14ed9881a3c58c31fd"
                    }
                ],
                "has_scene": True,
                "scene_status": 1,
                "scene_addresses": [
                    {
                        "protocol": "http",
                        "access_ip": "10.100.4.1",
                        "access_port": 40892
                    }
                ]
            }
        ]      
    }
}

    res_json = json.dumps(data)

    return res_json

if __name__ == '__main__':
    app.run(debug=True)