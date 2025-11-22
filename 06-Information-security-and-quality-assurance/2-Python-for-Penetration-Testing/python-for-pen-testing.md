# Python for Penetration Testing
---

## 1. Introduction and Setup
- Installed the required tools for penetration testing with Python.
- Set up **VSCode** with Microsoft’s Python extension.
- Reviewed how Python scripts interact with the OS and network.
- Prepared the environment for socket programming and tool development.

---

## 2. Understanding Sockets and Creating a TCP Server
- Learned what a **socket** is and how Python uses it for communication.
- Practiced creating a **TCP server** using:
  ```python
  socket.socket(socket.AF_INET, socket.SOCK_STREAM)
  ```
- Implemented:
  - Binding to a host/port (`bind()`)
  - Listening for connections (`listen()`)
  - Accepting clients (`accept()`)
- Understood how data is sent/received over TCP.

---

## 3. Creating a TCP Client
- Built a simple **client** capable of connecting to servers.
- Used:
  - `.connect((ip, port))` to establish the connection.
  - `.recv(1024)` to read server banners/data.
- Learned the difference between `connect()` and `connect_ex()`.
- Practiced safe connection handling and error checking.

---

## 4. Developing an Nmap Scanner (Part 1)
- Introduced the **python-nmap** library.
- Installed it using:
  ```bash
  pip3 install python-nmap
  ```
- Learned how Python can automate nmap scans.
- Used basic scan syntax:
  ```python
  scanner.scan(ip, '21-443', '-v -sU')
  ```
- Understood flags like:
  - `-sU` for UDP
  - `-sS` for TCP SYN
  - `-v` for verbosity

---

## 5. Developing an Nmap Scanner (Part 2)
- Expanded scanning functionality.
- Parsed nmap results programmatically.
- Extracted:
  - Port states
  - Service names
  - Protocol information
- Built a more readable output format for discovered ports.

---

## 6. Developing a Banner Grabber
- Wrote a function to capture server banners.
- Created a socket, connected, and read the first bytes the server sends.
- Example structure:
  ```python
  def banner(ip, port):
      s = socket.socket()
      s.connect((ip, int(port)))
      print(s.recv(1024))
  ```
- Banner grabbing is useful for identifying:
  - Service versions
  - Misconfigured servers
  - Vulnerable software

---

## 7. Developing a Port Scanner
- Built a Python-based port scanner from scratch.
- Used `connect_ex()` to check port status without exceptions.
- Implemented scanning across a port range.
- Learned how to:
  - Loop through ports
  - Test open/closed states
  - Produce a clean scan report

These foundations were just to introduce and prepare me for writing more advanced penetration testing tools and integrating Python into my security workflow.

