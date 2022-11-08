let DADO = randint(1, 6)
basic.showNumber(DADO)
while (DADO != 6) {
    DADO = randint(1, 6)
    basic.showNumber(DADO)
}
if (DADO == 6) {
    basic.showLeds(`
        # . . . #
        . . . . .
        . . # . .
        # . . . #
        . # # # .
        `)
}
