const BUTTON_NAMES = {
    "primary": 0, // usually left button
    "secondary": 2, // usually right button
    "auxiliary": 1, // usually mouse wheel middle button
}

const Poin = {
    "position": {"x": 0, "y": 0},
    "pressed": {0: undefined, 1: undefined, 2: undefined},
    "isPressed": function(button = "primary") {
        return (this.pressed[button] || this.pressed[BUTTON_NAMES[button]]) != undefined
    },
    "wasJustPressed": function(button = "primary", delta = 1000/60) {
        const pressed = this.pressed[button] || this.pressed[BUTTON_NAMES[button]]
        return window.performance.now() - pressed < delta
    },
    "setPressed": function(button, isPressed) {
        if(isPressed == true) {
            this.pressed[button] = window.performance.now()
        } else if(isPressed == false) {
            this.pressed[button] = undefined
        }
    },
    "setPosition": function(position) {
        this.position.x = position.x
        this.position.y = position.y
    },
}

document.addEventListener("mousedown", (event) => Poin.setPressed(event.button, true))
document.addEventListener("mouseup", (event) => Poin.setPressed(event.button, false))
document.addEventListener("mousemove", (event) => Poin.setPosition({"x": event.clientX, "y": event.clientY}))
document.addEventListener("pointerdown", (event) => Poin.setPressed(event.button || 0, true))
document.addEventListener("pointerup", (event) => Poin.setPressed(event.button || 0, false))
document.addEventListener("pointermove", (event) => Poin.setPosition({"x": event.clientX, "y": event.clientY}))
document.addEventListener("touchstart", (event) => Poin.setPressed(event.button || 0, true))
document.addEventListener("touchend", (event) => Poin.setPressed(event.button || 0, false))
document.addEventListener("touchmove", (event) => Poin.setPosition({"x": event.touches[0].clientX, "y": event.touches[0].clientY}))

document.addEventListener("contextmenu", (event) => {
    if(Poin.isIgnoringContextMenu == true) {
        event.preventDefault()
    }
})

module.exports = Poin
