import AvgGasPrice from "../components/AvgGasPrice";
import Transactions from "../components/Transactions";
const GasContainer = (props) => {
  return (
    <div>
      <Transactions />
      <AvgGasPrice />
    </div>
  );
};

export default GasContainer;
