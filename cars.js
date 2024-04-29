class Cars {
    constructor(make, model, year) {
        this.make = make;
        this.model = model;
        this.year = year;
    }

    carInfo() {
        console.log("\nmake: "+ this.make +"\nmodel: "+ this.model +"\nyear: "+this.year);
    }
}

const obj1 = new Cars();
obj1.make="Company";
obj1.model="Latest 14 Pro";
obj1.year="2024";
obj1.carInfo();

const obj2 = new Cars("XYZ", "poi753", "2002");
obj2.carInfo();
