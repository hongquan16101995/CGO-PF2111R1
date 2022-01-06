class Rectangle {
    x
    y
    width
    height

    constructor(x, y, width, height) {
        this.x = x
        this.y = y
        this.width = width
        this.height = height
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
        ctx.fillStyle = "blue"
        ctx.fillRect(this.x, this.y, this.width, this.height)
    }
}
