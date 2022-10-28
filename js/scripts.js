// Business Logic

function robogerify(number) {

  if (!parseInt(number) || /^0-9/.test(number)) {
    return "Error: '" + number + "' is not a natural number."
  }

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
    } else if (num.toString().includes("1")) {num
      roboArray.push("Beep!");
    } else {
      roboArray.push(num);
    }
  });

  return roboArray.join(", ");
} 

// UI Logic 

function updateOutput() {
  const p = document.querySelector("p");
  p.textContent = "";
  const numberInput = document.getElementById("input").value;
  p.innerText = robogerify(numberInput);
}

window.addEventListener("load", function() {
  let form = document.querySelector("form");
  form.addEventListener("submit", function(event) {
    event.preventDefault();
    updateOutput();
  });
});

