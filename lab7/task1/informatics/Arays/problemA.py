n = int(input())
a = input().split()

for i in range(n):
    a[i] = int(a[i])

for i in range(n):
    if i % 2 == 0:
        print(a[i], end=' ')