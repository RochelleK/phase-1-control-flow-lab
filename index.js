function scuberGreetingForFeet(someValue){
  // Write your code here!
  if (someValue <= 400){
    return 'This one is on me!';
  } 
  else if (someValue > 400 && someValue <= 2000) {
    return 'That will be twenty bucks.';
  }
  else if (someValue > 2000 && someValue < 2500){
    return 'I will gladly take your thirty bucks.';
  }
  else if (someValue >= 2500) {
    return 'No can do.'; 
  }
}

function ternaryCheckCity(place){
  // Write your code here!
  return (place === "NYC" ? "Ok, sounds good." : "No go.")

}

function switchOnCharmFromTip(someVal){
  // Write your code here!
  switch (someVal) {
    case 'generous': 
    return "Thank you so much."; 
    break; 
    case 'not as generous': 
    return "Thank you."; 
    break; 
    default:
    return "Bye."
    break; 
  }
}