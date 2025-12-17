import sys
from bottle import Bottle,request

def disabled(*args, **kwargs):
    raise PermissionError("Use of function is not allowed!")


def init_functions():
    import subprocess
    sys.modules['os'].popen = disabled
    sys.modules['os'].system = disabled
    sys.modules['os'].open = disabled
    sys.modules['os'].spawnl = disabled
    sys.modules['os'].spawnle = disabled
    sys.modules['os'].spawnlp = disabled
    sys.modules['os'].spawnlpe = disabled
    sys.modules['os'].spawnv = disabled
    sys.modules['os'].spawnve = disabled
    sys.modules['os'].spawnvp = disabled
    sys.modules['os'].spawnvpe = disabled
    sys.modules['subprocess'].Popen = disabled
    sys.modules['subprocess'].run = disabled
    sys.modules['subprocess'].call = disabled
    sys.modules['subprocess'].check_call = disabled
    sys.modules['subprocess'].check_output = disabled
    sys.modules['subprocess'].getstatusoutput = disabled
    sys.modules['subprocess'].getoutput = disabled
    del __builtins__.__dict__['open']


app = Bottle()

@app.route('/shell')
def index():
    cmd = request.query.cmd
    if len(cmd) > 18:
        return "Hacker!"
    exec(cmd)
    return "ture"

@app.route('/')
def index():
    return 'Hello CTFer!'
    
if __name__ == '__main__':
    init_functions()
    app.run(host='0.0.0.0', port=5555)

# del sys.modules['os']