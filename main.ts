let Hand = 0
input.onGesture(Gesture.Shake, function () {
    Hand = randint(1, 3)
    if (Hand == 1) {
        basic.showLeds(`
            # . . . #
            # # # # #
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (Hand == 2) {
        basic.showLeds(`
            . . . . .
            . # # # .
            . # # # .
            . # # # .
            . . . . .
            `)
    } else if (Hand == 4) {
        basic.showIcon(IconNames.Snake)
    } else {
        basic.showLeds(`
            . . . . #
            # # . # .
            # # # . .
            # # . # .
            . . . . #
            `)
    }
    basic.pause(2000)
    basic.clearScreen()
})
