const numbers = [1, 2, 3, 4, 5];
console.log(numbers);

const newNumbers = [...numbers, 6, 7, 8, 9, 10];
console.log(newNumbers);

const [first, ...restNumbers] = [1, 2, 3, 4, 5];
console.log(first);         
console.log(restNumbers);   

const student = { name: "Manoj", age: 19, course: "B.Tech", rollNo: 31 };
const { name, ...otherDetails } = student;
console.log(name);          
console.log(otherDetails);  