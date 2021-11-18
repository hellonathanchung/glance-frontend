import React from "react";
import { useMoralisCloudFunction } from "react-moralis";

const AvgGasPrice = () => {
  const { data } = useMoralisCloudFunction("getAvgGas");

  if (data) {
    const container = document.getElementById("gas-stats");
    container.innerHTML = data
      .map(function (row, rank) {
        return `<li>#${rank + 1}: ${Math.round(row.avgGas)} gwei</li>`;
      })
      .join("");
  }
  return (
    <div>
      <h1>Average Gas Price</h1>
      <h2> Gas Fee = Gas Cost x Avg. Gas Price x ETH Price </h2>
      <ul id="gas-stats"></ul>
    </div>
  );
};

export default AvgGasPrice;
