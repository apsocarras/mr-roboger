// Business Logic

function robogerify(number, name) {

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
    } else if (num.toString().includes("1")) {
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
  const outputParagraph = document.getElementById("outputParagraph");
  outputParagraph.textContent = "";
  const numberInput = document.getElementById("field1Input").value;
  const nameInput = document.getElementById("field2Input").value;

  let outputText;
  if (/[^0-9]/.test(numberInput)) {
    outputText = "Error: '" + numberInput + "' is not a natural number."
  } else if (listDescending()) { 
    outputText = robogerify(numberInput,nameInput).reverse().join(" — ");
  } else {
    outputText = robogerify(numberInput,nameInput).join(" — ");
  }

  outputParagraph.append(outputText);
}

window.addEventListener("load", function() {
  const form = document.querySelector("form");
  const randButton = document.getElementById("randButton");
  const bannerTitle = document.getElementById("banner-title");
  const clippyPic = document.getElementById("clippy-pic");

  form.addEventListener("submit", function(event) {
    event.preventDefault();
    updateOutput();
  });

  bannerTitle.addEventListener("mouseover", function(event) {
    event.preventDefault();
    bannerTitle.innerText = "Won't you be my neighbor?";
    clippyPic.removeAttribute("class");
  });

  bannerTitle.addEventListener("mouseout", function(event) {
    event.preventDefault();
    bannerTitle.innerText = "01010111 01101111 01101110 00100111 01110100 00100000 01111001 01101111 01110101 00100000 01100010 01100101 00100000 01101101 01111001 00100000 01101110 01100101 01101001 01100111 01101000 01100010 01101111 01110010 00111111?";
    clippyPic.setAttribute("class", "hidden");
  });

  randButton.addEventListener("click", function(event) {
    event.preventDefault();
    document.getElementById("field1Input").value = Math.floor(Math.random() * 100);
  });

});

