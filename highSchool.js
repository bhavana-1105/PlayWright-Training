class Person {
    constructor(firstName, lastName) {
      this.firstName = firstName;
      this.lastName = lastName;
    }
}
  
//   super keyword to call the constructor of their parent class and initialize their inherited properties.
class Student extends Person {
    constructor(firstName, lastName, grade) {
        super(firstName, lastName);
        this.grade = grade;
    }
}

class Teacher extends Person {
    constructor(firstName, lastName, salary, subject) {
        super(firstName, lastName);
        this.salary = salary;
        this.subject = subject;
    }
}

class CollegeStudent extends Student {
    constructor(firstName, lastName, grade, year, major) {
        super(firstName, lastName, grade);
        this.year = year;
        this.major = major;
    }
}

// Create a teacher
const teacher = new Teacher("Automation", "Tester", 70000, "Computer Science");
console.log(teacher);

// Create a college student
const collegeStudent = new CollegeStudent("Bhavana", "Bokka", 12, 2, "Electronics and Communication Engineering");
console.log(collegeStudent);