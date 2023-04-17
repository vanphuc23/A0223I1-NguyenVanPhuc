let canvas = document.getElementById("myCanvas");
let context = canvas.getContext('2d');
nhanvat = {
    x: 200, y: 500
}
setInterval(start, 100);

function start() {
    context.fillStyle = "#FF0000";
    var img = document.getElementById("down1");
    context.drawImage(img,300,500);
    vatcan();
}

document.addEventListener("keydown", key);

function key(envent) {
    switch (envent.which) {
        case 37:
            if (nhanvat.x > 0) {
                nhanvat.x -= 5;
                break;
            }
        case 38:
            if (nhanvat.y > 0) {
                nhanvat.y -= 5;
                break;
            }
        case 39:
            if (nhanvat.x + 20 < 700) {
                nhanvat.x += 5;
                break;
            }
        case 40:
            if (nhanvat.y + 20 < 650) {
                nhanvat.y += 5;
                break;
            }
    }
}

function vatcan() {
    if (nhanvat.x <= 0 || nhanvat.x + 20 >= 700 || nhanvat.y <= 0 || nhanvat.y + 20 >= 650) {
        console.log("Game over");
    }
}


