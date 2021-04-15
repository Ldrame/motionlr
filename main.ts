controller.up.onEvent(ControllerButtonEvent.Pressed, function () {
    dacar.y += -3
})
controller.B.onEvent(ControllerButtonEvent.Pressed, function () {
    dacar.y += -15
})
controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    dacar.setPosition(80, 60)
})
controller.left.onEvent(ControllerButtonEvent.Pressed, function () {
    dacar.x += -3
})
controller.right.onEvent(ControllerButtonEvent.Pressed, function () {
    dacar.x += 3
})
controller.down.onEvent(ControllerButtonEvent.Pressed, function () {
    dacar.y += 3
})
let dacar: Sprite = null
scene.setBackgroundColor(0)
dacar = sprites.create(img`
    . . . . . f f f f f . . . . . . 
    . . . . f e e e e e f . . . . . 
    . . . f d d d d d e e f . . . . 
    . . f f f d d f f d e f f . . . 
    . c d d e e d d d d e d d f . . 
    . c c d d d d c d d e d f f f . 
    . c d c c c c d d d e d f b d f 
    . . c d d d d d d e e f f d d f 
    . . . c d d d d e e f f e f f f 
    . . . . f f f e e f e e e f . . 
    . . . . f e e e e e e e f f f . 
    . . . f e e e e e e f f f e f . 
    . . f f e e e e f f f f f e f . 
    . f b d f e e f b b f f f e f . 
    . f d d f e e f d d b f f f f . 
    . f f f f f f f f f f f f f . . 
    `, SpriteKind.Player)
