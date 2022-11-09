const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight - 100;

//캐릭터의 정보를 미리 객체로 정리해두면 좋음
const dino = {
    x : 10,
    y : 200,
    width: 50,
    height: 50,
    draw(){
        ctx.fillStyle ='green';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

dino.draw();

//장애물도 정리
class Cactus {
    constructor() {
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle ='red';
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
}

let timer = 0;
const cactusArr = [];
let jumping = false;
let jumpingTimer = 0;

function frameWorking() {
    requestAnimationFrame(frameWorking); //초당 60번 실행시켜주는 내장 함수
    timer++;
    ctx.clearRect(0, 0, canvas.width, canvas.height); //

    if (timer % 200 === 0) {
        const cactus1 = new Cactus();
        cactusArr.push(cactus1);
    }

    cactusArr.forEach((item, i, o) => {
        item.x--; //장애물 이동 시키기
        //장애물이 사라지면 배열에서 제거해준다. 이거 안해주면 나중에 컴퓨터 터짐.
        if (item.x < 0) {
            o.splice(i,1);
        }

        crash(dino, item);

        item.draw();
    })

    if (jumping == true){
        dino.y -= 2;
        jumpingTimer += 2;
    }

    if (jumping == false) {
        if(dino.y < 200){
            dino.y+= 2;
        }
    }

    if (jumpingTimer > 100) {
        jumping = false;
        jumpingTimer = 0;
    }


    dino.draw();
}

document.addEventListener('keydown',function(e){
    if(e.code === 'Space'){
        jumping = true;
    }
})

function crash(dino,cactus){
    var xDistance = cactus.x - (dino.x + dino.width);
    var yDistance = cactus.y - (dino.y + dino.height);

    if(xDistance < 0 && yDistance < 0) {
        ctx.clearRect(0, 0, canvas.width, canvas.height);
    }
}


frameWorking();