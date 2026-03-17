n = int(input())
arr = input().split()
a = []

for i in range(n):
    a.append(int(arr[i]))

count = 0
for i in range(1, n):
    if a[i-1] < a[i]:
        count+=1


print(count)