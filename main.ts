Mbit_IR.onPressEvent(RemoteButton.Down, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Back, 100)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.Beep, function () {
    music.playMelody("A B A G F F - - ", 120)
})
Mbit_IR.onPressEvent(RemoteButton.Power, function () {
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.onPressEvent(RemoteButton.One, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
})
Mbit_IR.onPressEvent(RemoteButton.Two, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
})
Mbit_IR.onPressEvent(RemoteButton.Three, function () {
    Tinybit.RGB_Car_Big(Tinybit.enColor.Red)
})
Mbit_IR.onPressEvent(RemoteButton.Up, function () {
    Tinybit.CarCtrlSpeed(Tinybit.CarState.Car_Run, 100)
    basic.pause(100)
    Tinybit.CarCtrl(Tinybit.CarState.Car_Stop)
})
Mbit_IR.init(Pins.P9)
basic.forever(function () {
    basic.showLeds(`
        . . . . .
        . # . # .
        . . # . .
        . # . # .
        . . . . .
        `)
})
