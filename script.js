//complete this code
class Rectangle {
	constructor(width,height){
		this.width = width;
		this.height = height;
	}
	getArea(){
		return width*height ;
	} 
}

class Square extends Animal {
	getPerimeter(){
		return 2*(this.height + this.width);
	}
}

// Do not change the code below this line
window.Rectangle = Rectangle;
window.Square = Square;
