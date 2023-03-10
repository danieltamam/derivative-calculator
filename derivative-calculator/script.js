document.getElementById("ButtonCalculatorForDerivative").addEventListener("click", function() {
  const userInput = document.getElementById("function").value; // Get the user's input
  const derivative = math.derivative(userInput, 'x').toString(); // Calculate the derivative using Math.js and convert it to a string
  document.getElementById("output").innerHTML = derivative; // Display the result
});