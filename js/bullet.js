


//子弹Bullet
class allBullet{
	constructor(ele,id){
		//属性ele
		/*this.ele = document.createElement("div");
		this.id = parseInt(Math.random()*100000000);*/
		[this.ele,this.id] = [document.createElement("div"),parseInt(Math.random()*100000000)]
	}
}//方法init
	class Bullet extends allBullet{
	init(){
		
		//添加
		gameEngine.allBullet[this.id] = this;
		//console.log( gameEngine.allBullet );
		
		gameEngine.ele.appendChild(this.ele);
		this.ele.className = "bullet";
		this.ele.style.left = myPlane.ele.offsetLeft + myPlane.ele.offsetWidth/2 - this.ele.offsetWidth/2 + "px";
		this.ele.style.top = myPlane.ele.offsetTop - this.ele.offsetHeight + "px";
		return this;
	}
	
	//方法move
	move(num){
		var that = this;
		if(num ==0){
      this.timer = setInterval(function(){
        var y = that.ele.offsetTop - 10;
        if (y < -18) {
          clearInterval(that.timer); //停止移动
          gameEngine.ele.removeChild(that.ele); //移除子弹

          //删除
          delete gameEngine.allBullet[that.id];
        }
        else {
          that.ele.style.top = y + "px"; //移动
          that.ele.style.left = that.ele.offsetLeft - 4 + "px"; //移动
          if(that.ele.offsetLeft<0){
          	clearInterval(that.timer); //停止移动
          	gameEngine.ele.removeChild(that.ele); //移除子弹
          }
        }
      }, 30);
    }
    if(num ==1){
      this.timer = setInterval(function(){
        let y = that.ele.offsetTop - 10;
        if (y < -18) {
          clearInterval(that.timer); //停止移动
          gameEngine.ele.removeChild(that.ele); //移除子弹

          //删除
          delete gameEngine.allBullet[that.id];
        }
        else {
          that.ele.style.top = y + "px"; //移动
          that.ele.style.left = that.ele.offsetLeft - 2 + "px"; //移动
          
          if(that.ele.offsetLeft<0){
          	clearInterval(that.timer); //停止移动
          	gameEngine.ele.removeChild(that.ele); //移除子弹
          }
        }
      }, 40);
    }
    if(num ==2){
      this.timer = setInterval(function(){
        var y = that.ele.offsetTop - 10;
        if (y < -18) {
          clearInterval(that.timer); //停止移动
          gameEngine.ele.removeChild(that.ele); //移除子弹

          //删除
          delete gameEngine.allBullet[that.id];
        }
        else {
          that.ele.style.top = y + "px"; //移动
        }
      }, 40);
    }
    if(num ==3){
      this.timer = setInterval(function(){
        let y = that.ele.offsetTop - 10;
        if (y < -18) {
          clearInterval(that.timer); //停止移动
          gameEngine.ele.removeChild(that.ele); //移除子弹

          //删除
          delete gameEngine.allBullet[that.id];
        }
        else {
          that.ele.style.top = y + "px"; //移动
          that.ele.style.left = that.ele.offsetLeft + 2 + "px"; //移动
          
          if(that.ele.offsetLeft>473){
          	clearInterval(that.timer); //停止移动
          	gameEngine.ele.removeChild(that.ele); //移除子弹
          }
        }
      }, 40);
    }
    if(num ==4){
      this.timer = setInterval(function(){
        var y = that.ele.offsetTop - 10;
        if (y < -18) {
          clearInterval(that.timer); //停止移动
          gameEngine.ele.removeChild(that.ele); //移除子弹

          //删除
          delete gameEngine.allBullet[that.id];
        }
        else {
          that.ele.style.top = y + "px"; //移动
          that.ele.style.left = that.ele.offsetLeft + 4 + "px"; //移动
          
          if(that.ele.offsetLeft>473){
          	clearInterval(that.timer); //停止移动
          	gameEngine.ele.removeChild(that.ele); //移除子弹
          }
        }
      }, 40);
    }
	}

  //爆炸
	boom(){
		clearInterval(this.timer); //停止移动
		
		this.ele.className = "bullet-die";
		
		var that = this;
		var dieImgs = ["images2/die1.png", "images2/die2.png"]; 
		var i = 0;
		var dieTimer = setInterval(function(){
			if (i >= 1){
				clearInterval(dieTimer); //停止爆炸
				gameEngine.ele.removeChild(that.ele); //移除子弹
			}else {
				that.ele.style.background = "url("+ dieImgs[++i] +") no-repeat";
			}
		}, 100);
	}
	
}

