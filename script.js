function randomNumber(lower_val,upper_val) {

  var lower_val= prompt('Enter a number');
  var upper_val = prompt('Enter another number thats larger than the 1st number you entered');
  var randomNumber = Math.floor(Math.random() * (parseInt(upper_val) - parseInt(lower_val) + 1) +1);

  return randomNumber;
}

document.write(randomNumber());
