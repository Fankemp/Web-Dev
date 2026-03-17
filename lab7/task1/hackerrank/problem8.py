if __name__ == '__main__':
    n = int(input())
    arr = list(map(int, input().split()))

    first = max(arr)

    new_arr = []

    for i in range(n):
        if arr[i] != first:
            new_arr.append(arr[i])

    print(max(new_arr))