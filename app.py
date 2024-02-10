def calculator(a, b, o):

        if o == "+":
            print(f"Le résultat est: {a + b}")
        elif o == "-":
            print(f"Le résultat est: {a - b}")
        elif o == "*":
            print(f"Le résultat est: {a * b}")
        elif o == "/":
            print(f"Le résultat est: {a / b}")
        else:
            print(" TU fais exprès ub ...")

a = int(input("entrez un premier nombre : "))
b = int(input("entrez un deuxième nombre : "))

calculator(a, b, "+")
calculator(a, b, "-")
calculator(a, b, "*")
calculator(a, b, "/")




