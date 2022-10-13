# Poin #

A javascript utility for polling the state of the pointer (be it mouse or touch).

### Usage ###

You can poll the position of the pointer using `Poin.position`. This works for both the mouse pointer and the touch screen pointer.

```js
player.position.x = Poin.position.x
player.position.y = Poin.position.y
```

You can poll the state of a press using `Poin.wasJustPressed(buttonNumber)`. For `buttonNumber`, you can also use button names like `primary` for 0 or `secondary` for 2. If you don't put any button number or button name, it defaults to 0.

```js
if(Poin.wasJustPressed("primary")) player.shoot()
if(Poin.wasJustPressed("secondary")) player.reload()
```

### License ###

This project is licensed under the MIT license.
