function peopleByCity(people) {
  return people.reduce((cityCounts, person) => {
    cityCounts[person.city] = (cityCounts[person.city] || 0) + 1; 
    return cityCounts;
  }, {});
}


const people = [
  { name: "Alice", age: 30, city: "New York" },
  { name: "Bob", age: 40, city: "Chicago" },
  { name: "Charlie", age: 50, city: "New York" },
];
console.log(peopleByCity(people)); 
