const BUTTON_NAMES = {
    "primary": 0, // usually left button
    "secondary": 2, // usually right button
    "auxiliary": 1, // usually mouse wheel middle button
}

const Poin = {
    "position": {"x": 0, "y": 0},
    "pressed": {0: undefined, 1: undefined, 2: undefined},
    "isPressed": function(button = "primary") {
        const pressed = this.getPressed(button)
        if(pressed == undefined) return false
        return pressed.state
    },
    "wasJustPressed": function(button = "primary", state = true, delta = 1000/60) {
        const pressed = this.getPressed(button)
        if(pressed == undefined) return false
        return window.performance.now() - pressed.time < delta
            && pressed.state == state
    },
    "getPressed": function(button) {
        return this.pressed[button] || this.pressed[BUTTON_NAMES[button]]
    },
    "setPressed": function(button, state) {
        this.pressed[button] = {
            "time": window.performance.now(),
            "state": state
        }
    },
    "setPosition": function(position) {
        this.position.x = position.x
        this.position.y = position.y
    },
    "listen": function(element) {
        if(element == undefined) return

        element.addEventListener("mousedown", (event) => Poin.setPressed(event.button, true))
        element.addEventListener("mouseup", (event) => Poin.setPressed(event.button, false))
        element.addEventListener("mousemove", (event) => Poin.setPosition({"x": event.clientX, "y": event.clientY}))
        element.addEventListener("pointerdown", (event) => Poin.setPressed(event.button || 0, true))
        element.addEventListener("pointerup", (event) => Poin.setPressed(event.button || 0, false))
        element.addEventListener("pointermove", (event) => Poin.setPosition({"x": event.clientX, "y": event.clientY}))
        element.addEventListener("touchstart", (event) => Poin.setPressed(0, true))
        element.addEventListener("touchend", (event) => Poin.setPressed(0, false))
        element.addEventListener("touchstart", (event) => Poin.setPosition({"x": event.touches[0].clientX, "y": event.touches[0].clientY}))
        element.addEventListener("touchend", (event) => Poin.setPosition({"x": event.touches[0].clientX, "y": event.touches[0].clientY}))
        element.addEventListener("touchmove", (event) => Poin.setPosition({"x": event.touches[0].clientX, "y": event.touches[0].clientY}))
    }
}

document.addEventListener("contextmenu", (event) => {
    if(Poin.isIgnoringContextMenu == true) {
        event.preventDefault()
    }
})

document.addEventListener("touchstart", (event) => {
    if(Poin.isIgnoringTouchHover) {
        event.preventDefault()
    }
})

module.exports = Poin
