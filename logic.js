const updateTime = () => {
  let data = new Date();
  let hourData = data.getHours() % 12 || 12; // when it is 12'o clock it displays 0 instead of 12, then || this operator makes it to 12
  let minData = data.getMinutes();
  let secData = data.getSeconds();

  document.querySelector("#dataHours").innerText = hourData
    .toString()
    .padStart(2, "0");
  document.querySelector("#dataMins").innerText = minData
    .toString()
    .padStart(2, "0");
  document.querySelector("#dataSecs").innerText = secData
    .toString()
    .padStart(2, "0");
  document.querySelector("#dataDate").innerText =
    data.getDate() +
    "/" +
    Number(data.getMonth() + 1) +
    "/" +
    data.getFullYear();
};

setInterval(updateTime, 1000);
