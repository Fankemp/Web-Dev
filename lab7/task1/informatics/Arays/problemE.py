n = int(input())
arr = input().split()

for i in range(n):
    arr[i] = int(arr[i])

flag = False
for i in range(1, n):
    if arr[i-1] > 0 and arr[i] > 0:
        flag = True
        break
    if arr[i-1] < 0 and arr[i] < 0:
        flag = True
        break

if flag:
    print("YES")
else:
    print("NO")