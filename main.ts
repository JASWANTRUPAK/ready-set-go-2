tiles.setTilemap(tilemap`level1`)
scene.setBackgroundImage(assets.image`background`)
let mySprite = sprites.create(img`
    . . . . . . . . . . . . . . . . 
    . . . . . . . . . . . . . . . . 
    . . 3 . . . . . . . . 3 . . . . 
    . . 3 3 . . . . . . . 3 . . . . 
    . . . 3 . 3 3 3 3 . 3 3 3 . . . 
    . . . . 3 . 3 3 3 . 3 . 3 . . . 
    . . . . . 3 . 3 3 . 3 . 3 . . . 
    . 3 . . . 3 . 3 3 3 3 . 3 . . . 
    . 3 3 . . . 3 3 . 3 3 . 3 . . . 
    . . 3 3 . 3 3 3 3 3 3 3 3 . . . 
    . . . 3 3 3 3 3 3 3 3 3 3 3 3 . 
    . . . . 3 3 3 3 3 3 3 . . . 3 . 
    . . . . . 3 3 3 3 3 3 3 . . 3 . 
    . . . . . 3 3 . . 3 . 3 3 3 3 . 
    . . . . . . 3 3 . 3 . . . 3 3 . 
    . . . . . . . . 3 3 . . . . 3 . 
    `, SpriteKind.Food)
mySprite.ay = 6000
mySprite.vx = 1000
