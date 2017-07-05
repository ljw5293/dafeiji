



//我的飞机
var myPlane = {
	
	//属性ele
	ele: null,
	
	//属性fireInterval
	fireInterval: 500,
	
	//方法init
	init(){
		this.ele = document.createElement("div");
		gameEngine.ele.appendChild(this.ele);
		this.ele.className = "myplane";
		this.ele.style.left = (gameEngine.ele.offsetWidth-this.ele.offsetWidth)/2 + "px"
		this.ele.style.top = gameEngine.ele.offsetHeight-this.ele.offsetHeight + "px";
		return this;
	},
	
	//开火
	fire(){
	  let num =0;
		setInterval(function(){
		  num++;
			//创建子弹
			var bullet = new Bullet();
			bullet.init().move(num%5); //初始化子弹对象并移动
		}, myPlane.fireInterval);
		
	},
	
	//move 飞机移动
	move(){
		this.ele.onmousedown = (e)=>{
			e = e || event;
			var disX = e.offsetX;
			var disY = e.offsetY;
			document.onmousemove = (e)=>{
				e = e || event;
				let x = e.pageX - disX - gameEngine.ele.offsetLeft;
				if (x < 0) {
					x = 0;
				}
				else if (x > gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth) {
					x = gameEngine.ele.offsetWidth-myPlane.ele.offsetWidth;
				}
				myPlane.ele.style.left = x + "px";
				myPlane.ele.style.top = e.pageY - disY + "px";
			}
			document.onmouseup = ()=>{
				document.onmousemove = document.onmouseup = null;
			}
		}
	}
	
}





