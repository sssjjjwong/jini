var canvas = document.getElementById('canvas');
var ctx = canvas.getContext('2d');

canvas.width = window.innerWidth - 100;
canvas.height = window.innerHeight -100;
/*
cactusImg = new Image();
cactusImg.src = 'C:/Users/DELL/Documents/언타이틀드 폴더/img/cactus.png'
dinoImg = new Image();
dinoImg.src = 'C:/Users/DELL/Documents/언타이틀드 폴더/img/dino.png'
*/
// 공룡 유닛 만들기 

var dino = {
    x:10,
    y:200,
    width : 50,
    height : 50,
    draw(){
        ctx.fillStyle = 'green';
        ctx.fillRect(this.x,this.y,this.width,this.height);
        //ctx.drawImage(dinoImg,this.x,this.y)
    }
}

dino.draw()

class Cactus{
    constructor(){
        this.x = 500;
        this.y = 200;
        this.width = 50;
        this.height = 50;
    }
    draw(){
        ctx.fillStyle = 'red'
        ctx.fillRect(this.x, this.y, this.width, this.height);
        //ctx.drawImage(cactusImg,this.x,this.y)
    }
}

var cactus = new Cactus();
cactus.draw()

timer = 0;
jumpTimer = 0;
var cactuses = [];
var animation;

function action(){
    animation = requestAnimationFrame(action)
    requestAnimationFrame(action)

    ctx.clearRect(0, 0,canvas.width, canvas.height)
    
    //dino.draw()
    //dino.x++
    
    if(timer % 120 === 0){
        var cactus = new Cactus();
        cactuses.push(cactus);
    }
    cactuses.forEach((c,i,o)=>{
        if(c.x <10)
        {
            o.slice(i,1)
        }
        else{
            collision_detection(dino,c);
        }
        c.x = c.x - 3;
        c.draw();
    })

    if(jump === true){
        dino.y = dino.y -3;
        jumpTimer++;
    }
    else{
        if(dino.y <200 ){
            dino.y = dino.y +3;
        }
    }
    if(jumpTimer >50){
        jump = false;
        jumpTimer = 0;
    }


    dino.draw()
    timer++;
}
action();

var jump = false;
document.addEventListener('keydown',function(e){
    if(e.code === 'Space'){
        jump = true;
    }
})

function collision_detection(dino, cactus){
    var x_diff = cactus.x - (dino.x + dino.width);
    var y_diff = cactus.y - (dino.y + dino.height);

    if(x_diff < 0 && y_diff <0){
        cancelAnimationFrame(animation);
    }
}
