const temperature = 17;
const windSpeed = 31;

function calculateWindChill(temp, wind) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(wind, 0.16) +
        0.3965 * temp * Math.pow(wind, 0.16)
    ).toFixed(1);
}

const windChill = calculateWindChill(temperature, windSpeed);

document.addEventListener("DOMContentLoaded", () => {
    const weatherSection = document.querySelector(".weather");
    const windChillRow = document.createElement("div");
    windChillRow.classList.add("row");
    const labelCol = document.createElement("div");
    labelCol.classList.add("col");
    labelCol.textContent = "Wind Chill:";
    const valueCol = document.createElement("div");
    valueCol.classList.add("col");
    valueCol.textContent = `${windChill} °C`;
    windChillRow.appendChild(labelCol);
    windChillRow.appendChild(valueCol);
    weatherSection.appendChild(windChillRow);
});
