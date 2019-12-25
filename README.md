# Poin #

A javascript utility for polling the state of the pointer (be it mouse or touch).

### Usage ###

For any given frame of your game loop, you can poll the position of the pointer (be it mouse or touch) using `Poin.position`:

```js
player.position.x = Poin.position.x
player.position.y = Poin.position.y
```

You can poll the state of a press (be it a click of the mouse or touch of the screen) using `Poin.wasJustPressed()`:

```js
if(Poin.wasJustPressed()) {
    player.shootGun()
}
```

### License ###

This project is licensed under the MIT license.
