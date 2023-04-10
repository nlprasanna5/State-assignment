import React, { useState } from 'react';
import generateStyle from './GenerateTable.module.css';

function Generate() {
  const [number, setNumber] = useState(null);
  const [tableData, setTableData] = useState([]);

  // Function to generate a random number and update the state
  const generateRandomNumber = () => {
    const randomNum = Math.floor(Math.random() * 100) + 1;
    setNumber(randomNum);
    setTableData([...tableData, randomNum]);
  };

  return (
    <div className={generateStyle.container}>
      <h1 className={generateStyle.heading}>Random Number Generator</h1>
      <p className={generateStyle.number}>Number: {number}</p>
      <button className={generateStyle.button} onClick={generateRandomNumber}>
        Generate Random Number
      </button>
      <table className={generateStyle.table}>
        <thead>
          <tr>
            <th className={generateStyle.index}>Index</th>
            <th>Number</th>
          </tr>
        </thead>
        <tbody>
          {tableData.map((data, index) => (
            <tr key={index}>
              <td>{index + 1}</td>
              <td>{data}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Generate;
