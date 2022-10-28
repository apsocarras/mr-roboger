// Business Logic

function robogerify(number, name) {

  if (/[^0-9]/.test(number)) {
    return "Error: '" + number + "' is not a natural number."
  }

  let numArray = [];
  for (let i = 0; i <= number; i++) {
    numArray.push(i);
  }

  let roboArray = [];
  numArray.forEach(function(num) {
    if (num.toString().includes("3")) {
      if (name) {
      roboArray.push("Won't you be my neighbor, " + name.trim() + "?");
      } else {
      roboArray.push("Won't you be my neighbor?");
      }
    } else if (num.toString().includes("2")) { 
      roboArray.push("Boop!"); 
    } else if (num.toString().includes("1")) {num
      roboArray.push("Beep!");
    } else {
      roboArray.push(num);
    }
  });

  return roboArray;
} 

// UI Logic 

function listDescending() {
  const orderInput = document.querySelector("input[name='order']:checked").value;
  if (orderInput === "descending") {
    return true;
  } else {
    return false;
  }
}

function updateOutput() {
  const p = document.querySelector("p");
  p.textContent = "";
  const numberInput = document.getElementById("field1Input").value;
  const nameInput = document.getElementById("field2Input").value;

  let outputText; 
  if (listDescending()) { 
    outputText = robogerify(numberInput,nameInput).reverse().join(" — ");
  } else {
    outputText = robogerify(numberInput,nameInput).join(" — ");
  }

  p.append(outputText);
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    updateOutput();
  });
});

