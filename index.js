const cursor = {
    "isPressed": function() {
        return this.pressed !== undefined
    },
    "wasJustPressed": function(delta) {
        delta = delta || (1000 / 60)
        return Date.now() - this.pressed < delta
    },
    "position": {"x": 0, "y": 0},
    "pressed": undefined,
}

document.addEventListener("pointerdown", function(event) {
    cursor.pressed = Date.now()
})

document.addEventListener("pointerup", function(event) {
    cursor.pressed = undefined
})

document.addEventListener("pointermove", function(event) {
    cursor.position.x = event.clientX
    cursor.position.y = event.clientY

    let element = document.getElementById(cursor.element)
    if(element !== undefined) {
        let bounds = element.getBoundingClientRect()

        cursor.position.x -= bounds.x
        cursor.position.y -= bounds.y

        cursor.position.x /= bounds.width
        cursor.position.y /= bounds.height

        // x = Math.max(0, Math.min(1, x))
        // y = Math.max(0, Math.min(1, y))

        // x *= 16
        // y *= 9

        // x = Math.round(x * 16)
        // y = Math.round(y * 9)
    }
})

module.exports = cursor