n = int(input())
arr = input().split()

for i in range(n):
    arr[i] = int(arr[i])

count = 0
for i in range(1, n-1):
    if arr[i] > arr[i-1] and arr[i] > arr[i+1]:
        count+=1


print(count)