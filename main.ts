controller.A.onEvent(ControllerButtonEvent.Pressed, function () {
    myBall2 = carnival.createProjectileBallFromSprite(assets.image`ball-yellow`, myBall)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Booth, function (sprite, otherSprite) {
    sprite.destroy()
    info.changeScoreBy(-1)
})
sprites.onOverlap(SpriteKind.Projectile, SpriteKind.Enemy, function (sprite, otherSprite) {
    otherSprite.destroy()
    sprite.destroy()
    info.changeScoreBy(1)
    music.baDing.play()
})
let projectile: Sprite = null
let myBall2: Ball = null
let myBall: Ball = null
scene.setBackgroundImage(assets.image`wildWest`)
myBall = carnival.create(assets.image`ball-blue`, SpriteKind.Player)
myBall.setPosition(80, 90)
myBall.controlBallWithArrowKeys()
myBall.setTraceMulti(carnival.Tracers.Cross)
let mybool = sprites.create(assets.image`booth`, SpriteKind.Booth)
mybool.z = 20
let statusbar = statusbars.create(120, 6, StatusBarKind.Energy)
statusbar.setColor(5, 12)
statusbar.setBarBorder(2, 1)
statusbar.bottom = 115
myBall.variablePower(statusbar, 30, 60)
carnival.startCountdownGame(40, carnival.WinTypes.Score)
forever(function () {
    projectile = sprites.createProjectileFromSide(assets.image`target`, 50, 0)
    projectile.bottom = 56
    projectile.setKind(SpriteKind.Enemy)
    pause(randint(500, 2000))
})
