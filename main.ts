basic.forever(function () {
    music.ringTone(Math.map(input.rotation(Rotation.Pitch), -180, 180, 1, 1000))
})
