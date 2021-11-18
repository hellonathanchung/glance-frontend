import { React, useState } from "react";
import { useMoralis, useMoralisQuery } from "react-moralis";
import TransactionCard from "./TransactionCard";

function Transactions() {
  const [isToggled, setToggled] = useState(true);
  const toggleTrueFalse = () => setToggled(!isToggled);
  const { user } = useMoralis();
  const { data, error, isLoading } = useMoralisQuery(
    "EthTransactions",
    (query) => query.equalTo("from_address", user.get("ethAddress"))
  );

  let transactionBlocks;

  if (data) {
    transactionBlocks = data.map((transactionBlock) => (
      <TransactionCard transactionAttributes={transactionBlock.attributes} />
    ));
  }

  if (error) {
    return <span> Error</span>;
  }

  if (isLoading) {
    return <span> is Loading</span>;
  }

  return (
    <div>
      <h1>Transaction Data</h1>
      <button onClick={toggleTrueFalse}> Toggle View</button>
      {isToggled ? <pre> {transactionBlocks}</pre> : null}
    </div>
  );
}

export default Transactions;
