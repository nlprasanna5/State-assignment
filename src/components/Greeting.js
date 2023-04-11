import React, { useState } from "react";
import greetStyle from './greeting.module.css';

function Greet() {
  const messages = ["Happy Sriramanavami", "Happy Sankranthi", "Happy Ugadi", "Happy Vinayakachavithi", "Happy Dasara"];
  const [count, setCount] = useState(0);

  function handleClick() {
    setCount(count + 1);
    if (messages.length - 1 === count) {
      setCount(0);
    }
  }
  return (
    <>
      <div className={greetStyle.greetContainer}>
        <h2>{messages[count]}</h2>
        <button onClick={() => handleClick()}>Change greet</button>
      </div>

    </>
  )
}

export default Greet;
