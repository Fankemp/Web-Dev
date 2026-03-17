class myFavoriteThingsInMyLife:
    def __init__(self, place, time, activity):
        self.place = place
        self.time = time
        self.activity = activity


    def doActivity(self):
        return self.activity

    def doActivityIn(self):
        return self.place


    def __str__(self):
        return "My best day is when i do " + self.activity + " in " + self.place + " on " + self.time



class Cycling(myFavoriteThingsInMyLife):
    def __init__(self, place, time, activity, bike_type):
        super().__init__(place, time, activity)
        self.bike_type = bike_type

    def doActivity(self):
        return "Cycling with " + self.bike_type + " bike"

    def __str__(self):
        return "My best day is when i go cycling with " + self.bike_type + " bike in " + self.place + " on " + self.time


class RageBaiting(myFavoriteThingsInMyLife):
    def __init__(self, place, time, activity, target):
        super().__init__(place, time, activity)
        self.target = target

    def doActivity(self):
        return "Rage baiting " + self.target

    def __str__(self):
        return "My best day is when i rage bait " + self.target + " in " + self.place + " on " + self.time

