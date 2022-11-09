input.onButtonPressed(Button.A, function () {
    if (turn == 1) {
        if (player == 255) {
            n = 2
            list[i] = n
            player = 0
        } else {
            n = 1
            list[i] = n
            player = 255
        }
        print()
        i = 8
        turn = 0
    }
})
function next_i () {
    if (is_end() == 1) {
        if (i == 8) {
            i = 0
        } else {
            i += 1
        }
        if (list[i] != 0) {
            next_i()
        }
    } else if (is_end() == 2) {
        basic.showIcon(IconNames.Ghost)
    } else {
        if (player == 0) {
            basic.showIcon(IconNames.No)
        } else {
            basic.showIcon(IconNames.Square)
        }
    }
}
function i_to_matrix (num: number) {
    if (num == 0) {
        if (list[num] == 1) {
            led.plotBrightness(0, 0, 0)
        } else if (list[num] == 2) {
            led.plotBrightness(0, 0, 255)
        }
    } else if (num == 1) {
        if (list[num] == 1) {
            led.plotBrightness(0, 2, 0)
        } else if (list[num] == 2) {
            led.plotBrightness(0, 2, 255)
        }
    } else if (num == 2) {
        if (list[num] == 1) {
            led.plotBrightness(0, 4, 0)
        } else if (list[num] == 2) {
            led.plotBrightness(0, 4, 255)
        }
    } else if (num == 3) {
        if (list[num] == 1) {
            led.plotBrightness(2, 0, 0)
        } else if (list[num] == 2) {
            led.plotBrightness(2, 0, 255)
        }
    } else if (num == 4) {
        if (list[num] == 1) {
            led.plotBrightness(2, 2, 0)
        } else if (list[num] == 2) {
            led.plotBrightness(2, 2, 255)
        }
    } else if (num == 5) {
        if (list[num] == 1) {
            led.plotBrightness(2, 4, 0)
        } else if (list[num] == 2) {
            led.plotBrightness(2, 4, 255)
        }
    } else if (num == 6) {
        if (list[num] == 1) {
            led.plotBrightness(4, 0, 0)
        } else if (list[num] == 2) {
            led.plotBrightness(4, 0, 255)
        }
    } else if (num == 7) {
        if (list[num] == 1) {
            led.plotBrightness(4, 2, 0)
        } else if (list[num] == 2) {
            led.plotBrightness(4, 2, 255)
        }
    } else if (num == 8) {
        if (list[num] == 1) {
            led.plotBrightness(4, 4, 0)
        } else if (list[num] == 2) {
            led.plotBrightness(4, 4, 255)
        }
    }
}
function print () {
    led.plotBrightness(0, 0, 2)
    led.plotBrightness(0, 2, 2)
    led.plotBrightness(0, 4, 2)
    led.plotBrightness(2, 0, 2)
    led.plotBrightness(2, 2, 2)
    led.plotBrightness(2, 4, 2)
    led.plotBrightness(4, 0, 2)
    led.plotBrightness(4, 2, 2)
    led.plotBrightness(4, 4, 2)
    led.plotBrightness(1, 0, 90)
    led.plotBrightness(1, 1, 90)
    led.plotBrightness(1, 2, 90)
    led.plotBrightness(1, 3, 90)
    led.plotBrightness(1, 4, 90)
    led.plotBrightness(3, 0, 90)
    led.plotBrightness(3, 1, 90)
    led.plotBrightness(3, 2, 90)
    led.plotBrightness(3, 3, 90)
    led.plotBrightness(3, 4, 90)
    led.plotBrightness(0, 1, 90)
    led.plotBrightness(2, 1, 90)
    led.plotBrightness(4, 1, 90)
    led.plotBrightness(0, 3, 90)
    led.plotBrightness(2, 3, 90)
    led.plotBrightness(4, 3, 90)
    for (let index = 0; index <= 8; index++) {
        if (list[index] != 0) {
            i_to_matrix(index)
        } else {
        	
        }
    }
}
input.onButtonPressed(Button.AB, function () {
    led.plotBrightness(0, 0, 2)
    led.plotBrightness(0, 2, 2)
    led.plotBrightness(0, 4, 2)
    led.plotBrightness(2, 0, 2)
    led.plotBrightness(2, 2, 2)
    led.plotBrightness(2, 4, 2)
    led.plotBrightness(4, 0, 2)
    led.plotBrightness(4, 2, 2)
    led.plotBrightness(4, 4, 2)
    led.plotBrightness(1, 0, 90)
    led.plotBrightness(1, 1, 90)
    led.plotBrightness(1, 2, 90)
    led.plotBrightness(1, 3, 90)
    led.plotBrightness(1, 4, 90)
    led.plotBrightness(3, 0, 90)
    led.plotBrightness(3, 1, 90)
    led.plotBrightness(3, 2, 90)
    led.plotBrightness(3, 3, 90)
    led.plotBrightness(3, 4, 90)
    led.plotBrightness(0, 1, 90)
    led.plotBrightness(2, 1, 90)
    led.plotBrightness(4, 1, 90)
    led.plotBrightness(0, 3, 90)
    led.plotBrightness(2, 3, 90)
    led.plotBrightness(4, 3, 90)
    i = 0
    player = 255
    list = [
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0,
    0
    ]
    turn = 0
})
input.onButtonPressed(Button.B, function () {
    turn = 1
    print()
    next_i()
    if (list[i] == 0 && i == 0) {
        led.plotBrightness(0, 0, player)
    } else if (list[i] == 0 && i == 1) {
        led.plotBrightness(0, 2, player)
    } else if (list[i] == 0 && i == 2) {
        led.plotBrightness(0, 4, player)
    } else if (list[i] == 0 && i == 3) {
        led.plotBrightness(2, 0, player)
    } else if (list[i] == 0 && i == 4) {
        led.plotBrightness(2, 2, player)
    } else if (list[i] == 0 && i == 5) {
        led.plotBrightness(2, 4, player)
    } else if (list[i] == 0 && i == 6) {
        led.plotBrightness(4, 0, player)
    } else if (list[i] == 0 && i == 7) {
        led.plotBrightness(4, 2, player)
    } else if (list[i] == 0 && i == 8) {
        led.plotBrightness(4, 4, player)
    }
})
function is_end () {
    if (list[0] == list[1] && (list[0] == list[2] && list[2] != 0)) {
        return 0
    } else if (list[0] == list[3] && (list[0] == list[6] && list[6] != 0)) {
        return 0
    } else if (list[0] == list[4] && (list[0] == list[8] && list[8] != 0)) {
        return 0
    } else if (list[1] == list[4] && (list[1] == list[7] && list[7] != 0)) {
        return 0
    } else if (list[2] == list[4] && (list[2] == list[6] && list[6] != 0)) {
        return 0
    } else if (list[2] == list[5] && (list[2] == list[8] && list[8] != 0)) {
        return 0
    } else if (list[3] == list[4] && (list[3] == list[5] && list[5] != 0)) {
        return 0
    } else if (list[3] == list[4] && (list[3] == list[5] && list[5] != 0)) {
        return 0
    } else if (list[6] == list[7] && (list[6] == list[8] && list[8] != 0)) {
        return 0
    }
    for (let index = 0; index <= 8; index++) {
        if (list[index] == 0) {
            return 1
        }
    }
    return 2
}
let n = 0
let turn = 0
let list: number[] = []
let player = 0
let i = 0
led.plotBrightness(0, 0, 2)
led.plotBrightness(0, 2, 2)
led.plotBrightness(0, 4, 2)
led.plotBrightness(2, 0, 2)
led.plotBrightness(2, 2, 2)
led.plotBrightness(2, 4, 2)
led.plotBrightness(4, 0, 2)
led.plotBrightness(4, 2, 2)
led.plotBrightness(4, 4, 2)
led.plotBrightness(1, 0, 90)
led.plotBrightness(1, 1, 90)
led.plotBrightness(1, 2, 90)
led.plotBrightness(1, 3, 90)
led.plotBrightness(1, 4, 90)
led.plotBrightness(3, 0, 90)
led.plotBrightness(3, 1, 90)
led.plotBrightness(3, 2, 90)
led.plotBrightness(3, 3, 90)
led.plotBrightness(3, 4, 90)
led.plotBrightness(0, 1, 90)
led.plotBrightness(2, 1, 90)
led.plotBrightness(4, 1, 90)
led.plotBrightness(0, 3, 90)
led.plotBrightness(2, 3, 90)
led.plotBrightness(4, 3, 90)
i = 8
player = 255
list = [
0,
0,
0,
0,
0,
0,
0,
0,
0
]
turn = 0
