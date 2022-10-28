// Business Logic

function robogerify(number) {
  let numArray = [];
  for (let i = 0; i <= number; i++) {
    numArray.push(i);
  }
  let roboArray = [];
  numArray.forEach(function(num) {
    if (num.toString().includes("3")) {
      roboArray.push("Won't you be my neighbor?");
    } else if (num.toString().includes("2")) { 
      roboArray.push("Boop!"); 
    } else if (num.toString().includes("1")) {
      roboArray.push("Beep!");
    } else {
      roboArray.push(num);
    }
  });
  return roboArray;
}

// UI Logic 

