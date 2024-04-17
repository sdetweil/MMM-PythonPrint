import time;
import sys;

def hello():
        test_string=" ".join(sys.argv[1:])
	print("hello\n some other string\nparms='"+test_string+"'");

if __name__ == '__main__':
    hello()
