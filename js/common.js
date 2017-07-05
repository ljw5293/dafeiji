

/*
 * 碰撞检测
 */
 let isCrash = (obj1, obj2)=>{
	if(obj1 && obj2){
		//第二个对象的left值减去第一个对象的宽的一半
		const leftSide = obj2.offsetLeft-obj1.offsetWidth/2;
		//第二个对象的left值+第二个对象的宽加第一个对象的宽的一半
		const rightSide = obj2.offsetLeft+obj2.offsetWidth+obj1.offsetWidth/2;
		//第二个对象的top值 - 第一个对象的高的一半
		const upSide = obj2.offsetTop - obj1.offsetHeight/2;
		//第二个对象的top值 + 第二个对象的高加第一个对象的高的一半
		const downSide = obj2.offsetTop + obj2.offsetHeight + obj1.offsetHeight/2;
		//第一个对象的left值加第一个对象的宽的一半
		const x = obj1.offsetLeft+obj1.offsetWidth/2;
		//第一个对象的top值加第一个对象的高的一半
		const y = obj1.offsetTop + obj1.offsetHeight/2;
		if(x > leftSide && x < rightSide && y > upSide && y < downSide){
			//发生碰撞
			return true;
		} 
	}
	return false;
}

















