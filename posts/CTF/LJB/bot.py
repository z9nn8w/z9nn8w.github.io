import requests

# 基础URL - 需要根据实际平台填写
BASE_URL = "http://10.2.60.1"  # 请替换为实际的基础URL

def getInformation(token, race_id):
    url = f"{BASE_URL}/api/ct/web/jeopardy_race/race/checkpoints/robot/"
    query = {"token": token, "race_id": race_id}
    
    try:
        resp = requests.get(url, params=query)
        resp.raise_for_status()  # 检查HTTP状态码
        
        data = resp.json()
        
        # 检查API返回的状态码
        if data["code"] != "AD-000000":
            print(f"API错误: {data['code']} - {data['message']}")
            if data.get("detail"):
                print(f"详情: {data['detail']}")
            return False
        
        # 遍历所有题目
        for problem in data["data"]["list"]:
            print("题目id：", problem["resource_id"])
            print("题目名称：", problem["name"])
            print("题目方向：", problem["direction"])
            print("题目分数：", problem["score"])
            print("题目已被解出次数：", problem["solved"])
            print("是否解答：", problem["is_solved"])
            print("附件信息：", problem["attachment"])
            print("是否是场景题：", problem["has_scene"])
            print("场景状态：", problem["scene_status"])
            print("场景地址列表：", problem["scene_addresses"])
            
            # 遍历场景地址列表
            for address in problem["scene_addresses"]:
                print("ip地址：", address["access_ip"])
                print("端口：", address["access_port"])
                print("接入协议：", address["protocol"])
            
            print("-" * 50)  # 分隔线
        
        return True
        
    except requests.exceptions.RequestException as e:
        print(f"网络请求错误: {e}")
        return False
    except KeyError as e:
        print(f"JSON解析错误，缺少字段: {e}")
        return False
    except Exception as e:
        print(f"未知错误: {e}")
        return False

def postFlag(flag, token, checkpoint_id, race_id):
    url = f"{BASE_URL}/api/ct/web/jeopardy_race/race/flag/robot/"
    json_data = {
        "flag": flag,
        "token": token,
        "checkpoint_id": checkpoint_id,
        "race_id": race_id
    }
    
    try:
        resp = requests.post(url, json=json_data)
        resp.raise_for_status()  # 检查HTTP状态码
        
        data = resp.json()
        
        # 检查API返回的状态码
        if data["code"] != "AD-000000":
            print(f"API错误: {data['code']} - {data['message']}")
            if data.get("detail"):
                print(f"详情: {data['detail']}")
            return False
        
        # 输出提交结果
        result = data["data"]
        print(f"提交结果 - 是否通过: {result['is_pass']}, 是否重复: {result['is_duplicate']}")
        
        return result["is_pass"]
        
    except requests.exceptions.RequestException as e:
        print(f"网络请求错误: {e}")
        return False
    except KeyError as e:
        print(f"JSON解析错误，缺少字段: {e}")
        return False
    except Exception as e:
        print(f"未知错误: {e}")
        return False

if __name__ == "__main__":
    flag = "flag{your_flag_here}"
    token = "e032fa8be77e67ce5b6093ecd5567994"
    checkpoint_id = "your_checkpoint_id_here"
    race_id = "23754bad3020360ba447c6418c2e27b1"
    

    getInformation(token, race_id)
    #postFlag(flag, token, checkpoint_id, race_id)