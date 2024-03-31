const toFahrenheit = (inputTemp, inputTempType) => {
  let fahrenheit;
  let tempCelsius;
  switch (inputTempType) {
    case "F":
      fahrenheit = inputTemp;
      return fahrenheit;
    case "C":
      fahrenheit = (inputTemp * 9) / 5 + 32;
      return fahrenheit;
    case "K":
      tempCelsius = inputTemp - 273.15;
      fahrenheit = (tempCelsius * 9) / 5 + 32;
      return fahrenheit;
    default:
      fahrenheit = "Wrong temperature type";
      return fahrenheit;
  }
};

//method to convert temp into celsius
const toCelsius = (inputTemp, inputTempType) => {
  let celsius;
  switch (inputTempType) {
    case "C":
      celsius = inputTemp;
      return celsius;
    case "F":
      celsius = ((inputTemp - 32) * 5) / 9;
      return celsius;
    case "K":
      celsius = inputTemp - 273.15;
      return celsius;
    default:
      celsius = "Wrong temperature type";
      return celsius;
  }
};

const toKelvin = (inputTemp, inputTempType) => {
  let kelvin;
  switch (inputTempType) {
    case "K":
      kelvin = inputTemp;
      return kelvin;
    case "F":
      kelvin = ((inputTemp - 32) * 5) / 9 + 273.15;
      return kelvin;
    case "C":
      kelvin = inputTemp + 273.15;
      return kelvin;
    default:
      kelvin = "Wrong temperature type";
      return kelvin;
  }
};

const btnConvert = document.getElementById("btnConvert");

const tempConverter = (inputTemp, inputTempType, outputTempType) => {
  const outputResult = document.getElementById("outputResult");

  if (inputTemp == "") {
    alert("Enter degree first to convert");
  } else {
    let tempResult;
    switch (outputTempType) {
      case "Fahrenheit":
        tempResult = toFahrenheit(parseFloat(inputTemp), inputTempType);
        outputResult.innerHTML = tempResult.toFixed(2) + "°F";
        break;
      case "Celsius":
        tempResult = toCelsius(parseFloat(inputTemp), inputTempType);
        outputResult.innerHTML = tempResult.toFixed(2) + "°C";
        break;
      case "Kelvin":
        tempResult = toKelvin(parseFloat(inputTemp), inputTempType);
        outputResult.innerHTML = tempResult.toFixed(2) + "K";
        break;
      default:
        outputResult.innerHTML = "Wrong temperature type";
        break;
    }
  }
};
btnConvert.addEventListener("click", () => {
  const inputTemp = document.getElementById("degreeInput").value;
  const inputTempType = document.getElementById("degreeTypeDrop").value;
  const outputTempType = document.getElementById("convertTypeDrop").value;
  tempConverter(inputTemp, inputTempType, outputTempType);
});
