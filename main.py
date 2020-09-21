Hand = 0

def on_gesture_shake():
    global Hand
    Hand = randint(1, 3)
    if True:
        pass
    elif False:
        pass
    else:
        pass
input.on_gesture(Gesture.SHAKE, on_gesture_shake)
