 evenOrOdd = (number) => {
  if (number % 2 == 1) {
    return "odd";
  } else {
    return "even";
  }

  // TODO: this should return "even" if the number is even, "odd" otherwise
}

let result = evenOrOdd(5);
console.log(result);
