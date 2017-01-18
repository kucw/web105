import xml.etree.cElementTree as ET
tree = ET.ElementTree(file='data.xml')
root = tree.getroot()
a = []
name = []
address = []
time = []
status = []
for child in root:
    for child2 in child:
        if child2.tag == "name":
            name.append(child2.text)
        elif child2.tag == "ExtendedData":
            for child3 in child2:
                if child3.attrib['name'] == 'address':
                    for child4 in child3:
                        address.append(child4.text)
                elif child3.attrib['name'] == 'time':
                    for child4 in child3:
                        time.append(child4.text)
                elif child3.attrib['name'] == 'status':
                    for child4 in child3:
                        status.append(child4.text) 
        elif child2.tag == "Point":
            for child3 in child2:
                lat = float(child3.text.split(",")[1])
                lng = float(child3.text.split(",")[0])
                a.append([lat, lng])
                """
                if lat > 24.684:
                    a.append([lat, lng])
                elif lat < 24.684 and lat > 24.067:
                    a.append([lat, lng])
                else:
                    a.append([lat, lng])
                """
#a.sort()
output = "["
i = 0
while i < len(a):
    if a[i][0] > 24.067:
        i += 1
        continue
    
    output += "["
    output += str(a[i][0])
    output += ","
    output += str(a[i][1])
    output += ",\""
    output += name[i]
    output += "\",\""
    output += address[i]
    output += "\",\""
    output += time[i]
    output += "\",\""
    output += status[i]
    output += "\"],"
    i += 1
output += "]"

print output
