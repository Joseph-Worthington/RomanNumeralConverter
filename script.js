const btn = document.getElementById('convert-btn');
const result = document.getElementById('output');

const convertToRomanNumeral = (input) => {
  let romanNumerals = '';

  if (input >= 1000) {
    romanNumerals += 'M' + convertToRomanNumeral(input - 1000);
  } else if (input >= 900) {
    romanNumerals += 'CM' + convertToRomanNumeral(input - 900);
  } else if (input >= 500) {
    romanNumerals += 'D' + convertToRomanNumeral(input - 500);
  } else if (input >= 400) {
    romanNumerals += 'CD' + convertToRomanNumeral(input - 400);
  } else if (input >= 100) {
    romanNumerals += 'C' + convertToRomanNumeral(input - 100);
  }else if (input >= 90) {
    romanNumerals += 'XC' + convertToRomanNumeral(input - 90);
  } else if (input >= 50) {
    romanNumerals += 'L' + convertToRomanNumeral(input - 50);
  } else if (input >= 40) {
    romanNumerals += 'XL' + convertToRomanNumeral(input - 40);
  } else if (input >= 10) {
    romanNumerals += 'X' + convertToRomanNumeral(input - 10);
  } else if (input >= 9) {
    romanNumerals += 'IX' + convertToRomanNumeral(input - 9);
  } else if (input >= 5) {
    romanNumerals += 'V' + convertToRomanNumeral(input - 5);
  } else if (input === 4) {
    romanNumerals += 'IV' + convertToRomanNumeral(input - 4);
  } else if (input >= 1) {
    romanNumerals += 'I' + convertToRomanNumeral(input - 1);
  }

  return romanNumerals;
};

btn.addEventListener('click', () => {
  const inputVal = parseInt(document.getElementById('number').value)
  if( isNaN(inputVal) ){
    return result.innerHTML = 'Please enter a valid number';
  }else if( inputVal <= 0 ){
    return result.innerHTML = 'Please enter a number greater than or equal to 1';
  }else if( inputVal >= 4000 ){
    return result.innerHTML = 'Please enter a number less than or equal to 3999'
  }
  result.innerHTML = convertToRomanNumeral(inputVal);
  return;
})