class MyCircle {
    x
    y
    radius

    constructor(x, y, radius) {
        this.x = x
        this.y = y
        this.radius = radius
    }

    move(speed) {
        this.y += speed
    }

    moveX(boolean) {
        if (boolean === true) {
            this.x += 3
        } else {
            this.x -= 3
        }
    }

    moveY(boolean) {
        if (boolean === true) {
            this.y += 3
        } else {
            this.y -= 3
        }
    }

    draw(ctx) {
        ctx.beginPath()
        ctx.fillStyle = "red"
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2)
        ctx.fill()
        ctx.closePath()
    }
}