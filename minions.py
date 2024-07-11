# // Description
# Consider an infinite 2D plane divided into four quadrants by the x-axis and the y-axis. A tiny creature called minion is present at the origin i.e. (0,0) at time T = 0. Minion is very confused and is trying to find his friends. He can travel in only 4 directions namely, +ve x-axis, +ve y-axis, -ve x-axis and -ve y-axis. Initially, he is travelling in the +ve x-axis direction at a speed of 1 unit distance per unit of time.

# Minion's friends are quite worried about him and reach at the origin (0,0) while looking for him. They know all the turns taken by minion at various points of time between 0 (beginning) and N (present time). They hand the data to you. You have to find the current location of the minion to help his friends.

# Input Format
# The first line of input contains two space-separated integers N and L - the present time, and the number of turns taken.
# Each of the next L lines contains two space-separated integers time, and turn - the time at which turn is taken and for the ease of taking inputs, the left turn is denoted by 0 and the right turn is denoted by 1.

# Note: The L inputs are not necessarily in increasing order of time.

# Output Format
# Print the sum of the X coordinate of the minion's current position and Y coordinate of the minion's current position.

# Constraints
# 1 ≤ N ≤ 109
# 1 ≤ L ≤ 105
# 1 ≤ time ≤ N
# 0 ≤ turn ≤ 1

# Sample Input 1
# 2 1
# 1 1
# Sample Output 1
# 0 //

def find_minion_position(N, L, turns):
    # Initial position and direction
    x, y = 0, 0
    direction = 'E'  # East, +x direction
    current_time = 0
    
    # Sorting turns by time
    turns.sort()
    
    # Direction vectors for E, N, W, S
    direction_vectors = {
        'E': (1, 0),
        'N': (0, 1),
        'W': (-1, 0),
        'S': (0, -1)
    }
    
    # Directions in order for left (0) and right (1) turns
    left_turn = {'E': 'N', 'N': 'W', 'W': 'S', 'S': 'E'}
    right_turn = {'E': 'S', 'S': 'W', 'W': 'N', 'N': 'E'}
    
    for turn_time, turn_dir in turns:
        # Move until the turn time
        time_diff = turn_time - current_time
        x += direction_vectors[direction][0] * time_diff
        y += direction_vectors[direction][1] * time_diff
        current_time = turn_time
        
        # Change direction
        if turn_dir == 0:
            direction = left_turn[direction]
        else:
            direction = right_turn[direction]
    
    # Move from the last turn time to N
    time_diff = N - current_time
    x += direction_vectors[direction][0] * time_diff
    y += direction_vectors[direction][1] * time_diff
    
    return x + y

def main():
    import sys
    input = sys.stdin.read
    data = input().split()
    
    N = int(data[0])
    L = int(data[1])
    
    turns = []
    index = 2
    for _ in range(L):
        turn_time = int(data[index])
        turn_dir = int(data[index + 1])
        turns.append((turn_time, turn_dir))
        index += 2
    
    result = find_minion_position(N, L, turns)
    print(result)

if __name__ == "__main__":
    main()

