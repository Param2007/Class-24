class Bird extends BaseClass {

    constructor(x,y) {
        super(x,y,50,50);
    }

    display() {

        var p = this.body.position;
        
        p.x = mouseX;
        p.y = mouseY;

        super.display();
    }
}