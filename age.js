const instructions = [
  "Step 1: Multiply your age by 2.",
  "Step 2: Add 5 to the result.",
  "Step 3: Multiply the new number by 50.",
  "Step 4: Add 1775 if you've had your birthday this year. Otherwise, add 1774.",
  "Step 5: Subtract your birth year from the result."
];

let currentStep = -1; // Start at -1 to show "Start" first

function nextStep() {
  const instruction = document.getElementById("instruction");
  const stepsDiv = document.getElementById("steps");
  const button = stepsDiv.querySelector("button");
  const finalDiv = document.getElementById("finalInput");

  currentStep++;

  if (currentStep < instructions.length) {
    instruction.innerText = instructions[currentStep];
    button.innerText = "Next";
  } else {
    stepsDiv.style.display = "none";
    finalDiv.style.display = "block";
  }
}

function revealAge() {
  const input = parseInt(document.getElementById("finalResult").value);
  const output = document.getElementById("output");

  if (isNaN(input) || input < 100) {
    output.innerText = "❌ Please enter a valid number.";
    return;
  }

  const age = input % 100;
  output.innerText = `🎉 You are approximately ${age} years old!`;
}
