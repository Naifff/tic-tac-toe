input.onButtonPressed(Button.B, function () {
    if (i == 0) {
        if (led.point(0, 0)) {
            if (led.point(0, 2)) {
                if (led.point(0, 4)) {
                    if (led.point(2, 0)) {
                        if (led.point(2, 2)) {
                            if (led.point(2, 4)) {
                                if (led.point(4, 0)) {
                                    if (led.point(4, 2)) {
                                        if (led.point(4, 4)) {
                                        	
                                        }
                                    }
                                }
                            }
                        }
                    }
                }
            } else {
                led.plotBrightness(0, 2, 255)
            }
        } else {
            led.plotBrightness(0, 0, 255)
        }
    }
})
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
i = 0
