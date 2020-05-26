import socket

HOST = '192.168.0.103'
PORT = 13327

s = socket.socket(socket.AF_INET, socket.SOCK_STREAM)

s.bind((HOST, PORT))
s.listen()

conn, addr = s.accept()

print('{0} connected to Server!'.format(addr))

print('Client:\t{0}'.format(conn.recv(1024)))
conn.send(b'Send Data to Client')

print('Client:\t{0}'.format(conn.recv(1024)))
conn.send(b'Testing Echo!')

print('Client:\t{0}'.format(conn.recv(1024)))
conn.send(b'Send spell: Fireball')

print('Client:\t{0}'.format(conn.recv(1024)))
conn.send(b'Close')


print("Close conn")
conn.close()
s.close()
