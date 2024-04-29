class Animal {
    eat(){
        console.log("eat() method in Animal class");
    };
    sleep(){
        console.log("sleep() method in Animal class");
    };
}
class Bird extends Animal {
    eat(){
        console.log("eat() method in Bird class");
    };
    sleep(){
        console.log("sleep() method in Bird class");
    };
    fly(){
        console.log("fly() method in Bird class");
    }
}

// Instance of Animal class
const animal = new Animal();
animal.eat();
animal.sleep();

//  Instance of Bird class
const bird = new Bird();
bird.eat();
bird.sleep();
bird.fly();
