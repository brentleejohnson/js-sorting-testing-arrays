console.log("Can Everyone post a cake in chat?");

const numbers = [
  1,
  2,
  651,
  65,
  8,
  32,
  5,
  684,
  322,
  65,
  68,
  135,
  684,
  351,
  687,
  861351,
  -9,
];

console.log(numbers);

numbers.sort((a, b) => a - b);

console.log(numbers);

fetch("https://randomuser.me/api/?results=100")
  .then((response) => response.json())
  .then((data) => {
    //   Store the results
    let people = data.results;

    console.log(people);

    //   Sort out every person by first name
    people
      .sort((a, b) => {
        if (a.name.first < b.name.first) return -1;
        if (a.name.first > b.name.first) return 1;
        return 0;
      })
      .reverse();

    //   Print out every person's Name
    people.forEach((person) =>
      console.log(`${person.name.first}  ${person.name.last}`)
    );

    //   Check if there are any people over the age of 65
    const isPensioners = people.some((person) => {
      return person.dob.age >= 65;
    });

    console.log("Are there pensioners: ", isPensioners);

    //   Is every person over the age of 18
    const canVote = people.every((person) => {
      return person.dob.age >= 18;
    });

    console.log("Is everyone able to vote: ", canVote);
  });
