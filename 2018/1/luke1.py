
with open("input-vekksort.txt") as f:
    lines = f.readlines()
    
    sum = 0
    prev = 0

    for elem in lines:
        elemParsed = int(elem)
        if(elemParsed < prev):
            continue
        sum += elemParsed
        prev = elemParsed

print(sum)