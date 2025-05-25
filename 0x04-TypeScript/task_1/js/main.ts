interface Teacher {
  firstName: string;
  lastName: string;
  fullTimeEmployee: boolean;
  yearsOfExperience?: number;
  location: string;
  contract: boolean;
}
const teacher1: Teacher = {
  firstName: "Ahmed",
  lastName: "Said",
  fullTimeEmployee: false,
  location: "Egypt",
  contract: false,
};


// Todo Directors Section
interface Directors {
  firstName: string;
  lastName: string;
  location: string;
  fullTimeEmployee: boolean;
  numberOfReports: number;
}

const director1: Directors = {
  firstName: "Ahemd",
  lastName: "saeed",
  location: "london",
  fullTimeEmployee: true,
  numberOfReports: 10,
};

// Todo Function Section For Print Teachers

interface printTeacher {
  (firstName: string, lastName: string): string;
}

const printTeacherFn:printTeacher=(firstName, lastName) =>{
    return `${firstName.charAt(0)}. ${lastName}`;
}

printTeacherFn("Ahmed", "Saeed");


// ! constructor


interface StudentClassInterface {
  workOnHomework(): string;
  displayName(): string;
}

interface StudentConstructor {
  new (firstName: string, lastName: string): StudentClassInterface;
}

class StudentClass implements StudentClassInterface {
  constructor(private firstName: string, private lastName: string) {}

  workOnHomework(): string {
    return "Currently working";
  }

  displayName(): string {
    return this.firstName;
  }
}

const student = new StudentClass("ahmed", "saeed");
console.log(student.displayName()); 
console.log(student.workOnHomework());