interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const student1: Student = {
  firstName: "ahmed",
  lastName: "saeed",
  age: 15,
  location: "cairo",
};
const student2: Student = {
  firstName: "abdo",
  lastName: "saeed",
  age: 14,
  location: "suez",
};

const studentsList: Student[] = [student1, student2];

const table = document.createElement("table");

studentsList.forEach((student) => {
  const row = document.createElement("tr");

  const fristNameCall = document.createElement("td");
  fristNameCall.textContent = student.firstName;

  const locationCall = document.createElement("td");

  locationCall.textContent = student.location;

  row.appendChild(fristNameCall);
  row.appendChild(locationCall);

  table.appendChild(row);
});

document.body.appendChild(table);
