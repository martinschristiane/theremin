basic.clearScreen()
if (input.lightLevel() >= 0 && input.lightLevel() < 32) {
    music.ringTone(262)
} else if (input.lightLevel() >= 32 && input.lightLevel() < 64) {
    music.ringTone(294)
} else if (input.lightLevel() >= 64 && input.lightLevel() < 96) {
    music.ringTone(330)
} else if (input.lightLevel() >= 96 && input.lightLevel() < 128) {
    music.ringTone(349)
} else if (input.lightLevel() >= 128 && input.lightLevel() < 160) {
    music.ringTone(392)
} else if (input.lightLevel() >= 160 && input.lightLevel() < 192) {
    music.ringTone(440)
} else if (input.lightLevel() >= 192 && input.lightLevel() < 224) {
    music.ringTone(494)
} else {
    music.ringTone(523)
}
basic.forever(function () {
    music.ringTone(Math.map(input.rotation(Rotation.Pitch), -180, 180, 1, 1000))
})
