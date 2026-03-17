if __name__ == '__main__':
    students = []

    for _ in range(int(input())):
        name = input()
        score = float(input())
        students.append([name, score])

    grades = []
    for i in range(len(students)):
        grades.append(students[i][1])

    first = min(grades)

    second_grades = []
    for i in range(len(students)):
        if students[i][1] != first:
            second_grades.append(students[i][1])

    second = min(second_grades)

    names = []
    for i in range(len(students)):
        if students[i][1] == second:
            names.append(students[i][0])

    names.sort()

    for name in names:
        print(name)