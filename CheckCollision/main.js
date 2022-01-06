let rectangle1 = new Rectangle(200, 50, 100, 50)
let rectangle2 = new Rectangle(20, 480, 80, 20)
let circle1 = new MyCircle(500, 80, 30)
let circle2 = new MyCircle(750, 480, 20)
let speed = 1

function play() {
    let ctx = document.getElementById("canvas").getContext("2d")
    ctx.clearRect(0, 0, 800, 500)
    check()
    rectangle1.move(speed)
    rectangle1.draw(ctx)
    circle1.move(speed)
    circle1.draw(ctx)
    rectangle2.draw(ctx)
    circle2.draw(ctx)
    if (checkCirAndCir() || checkRecAndRec()
        || checkRecAndCir(circle1, rectangle2) || checkRecAndCir(circle2, rectangle1)) {
        alert("You die")
        stop()
    }
}

function check() {
    if (rectangle1.y === 450) {
        speed = -1
    } else if (rectangle1.y === 50) {
        speed = 1
    }
    if (circle1.y === 470) {
        speed = -1
    } else if (circle1.y === 80) {
        speed = 1
    }
}

window.addEventListener("keydown", moveSelection)

function moveSelection(e) {
    switch (e.keyCode) {
        case 37:
            rectangle2.moveX(false)
            break
        case 38:
            rectangle2.moveY(false)
            break
        case 39:
            rectangle2.moveX(true)
            break
        case 40:
            rectangle2.moveY(true)
            break
        case 65:
            circle2.moveX(false)
            break
        case 87:
            circle2.moveY(false)
            break
        case 68:
            circle2.moveX(true)
            break
        case 83:
            circle2.moveY(true)
            break
    }
}

let clear;

function start() {
    clear = setInterval(play, 10)
}

function stop() {
    clearInterval(clear)
}

function checkRecAndRec() {
    let distX = Math.abs((rectangle1.x + (rectangle1.width / 2)) - (rectangle2.x + (rectangle2.width) / 2));
    let distW = (rectangle1.width + rectangle2.width) / 2;
    let distY = Math.abs((rectangle1.y + (rectangle1.height / 2)) - (rectangle2.y + (rectangle2.height) / 2));
    let distH = (rectangle1.height + rectangle2.height) / 2;
    return (distX <= distW && distY <= distH);
}

function checkCirAndCir() {
    let distance = Math.pow((circle1.x - circle2.x), 2) + Math.pow((circle1.y - circle2.y), 2)
    return (distance <= Math.pow((circle1.radius + circle2.radius), 2))
}

function checkRecAndCir(circle1, rectangle2) {
    let Ax = circle1.x;
    let Ay = circle1.y;

    let rect_left = rectangle2.x;
    let rect_top = rectangle2.y;
    let rect_right = rectangle2.x + rectangle2.width;
    let rect_bottom = rectangle2.y + rectangle2.height;

    if (circle1.x < rect_left)
        Ax = rect_left;
    else if (circle1.x > rect_right)
        Ax = rect_right;

    if (circle1.y < rect_top)
        Ay = rect_top;
    else if (circle1.y > rect_bottom)
        Ay = rect_bottom;

    let dx = circle1.x - Ax;
    let dy = circle1.y - Ay;

    return (dx * dx + dy * dy) <= circle1.radius * circle1.radius;
}