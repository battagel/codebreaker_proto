
def check_guess(guess, code):

    # Black = right colour in right position

    # White = right colour wrong position

    num_blacks = 0
    num_whites = 0

    for pos in range(0,len(code)):
        if guess[pos] == code[pos]:
            num_blacks += 1
            guess[pos], code[pos] = "B" "B"
    for posA in range(0, len(code)):
        for posB in range(0, len(code)):
            if code[posA] == guess[posB] and code[posA] != "B" and code[posA] != "W":
                num_whites += 1
                pos_in_code = code.index(guess[posB])
                guess[posB], code[pos_in_code] = "W", "W"
                break
    
    return num_blacks, num_whites

print(check_guess([1,3,3,4,5],[1,3,6,6,5]))
print(check_guess([4,5,6,6,5],[4,4,6,6,5]))
print(check_guess([1,1,1,1,1],[1,3,1,1,5]))
print(check_guess([1,3,3,4,5],[1,1,1,3,1]))