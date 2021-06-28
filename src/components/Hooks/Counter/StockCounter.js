import React, { useState } from "react";
import { Button } from 'semantic-ui-react'
import "./StockCounter.css";

function StockCounter() {
  const [stock, setStock] = useState(0);

  const moreStock = () => {
    setStock(stock + 1);
  };
  const lessStock = () => {
    setStock(stock - 1);
  };
  return(
    <div className="StockCounter">
        <Button basic color='black' onClick={lessStock} icon="minus"/>
        <div className="stock-number">{stock}</div>
        <Button basic color='black' onClick={moreStock} icon="plus"/>
    </div>
  )
}

export default StockCounter;
