from models import myFavoriteThingsInMyLife, Cycling, RageBaiting

if __name__== "__main__":
    base = myFavoriteThingsInMyLife("office", "Monday", "working")
    cycling = Cycling("mountains", "Saturday", "cycling", "road")
    ragebaiting = RageBaiting("internet", "everyday", "ragebaiting", "strangers")

    objects = [base, cycling, ragebaiting]

    for obj in objects:
        print(obj)
        print(obj.doActivity())
        print()
