n = int(input())
nums = input().split()
a = []

for i in range(n):
    a.append(int(nums[i]))

count = 0
for i in range(n):
    if a[i] > 0:
        count += 1

print(count)