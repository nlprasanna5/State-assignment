import React, { useState } from 'react';
import mouseStyle from './MouseEvent.module.css'

function MouseEvent() {
  const [logs, setLogs] = useState([]);

  const timeStamp = new Date().toLocaleString();

  function mouseOverH1() {
    let events = {
      time: timeStamp,
      name: 'mouseOverH1',
    };
    setLogs([...logs, events]);
  }

  function mouseOutH1() {
    let events = {
      time: timeStamp,
      name: 'mouseOutH1',
    };
    setLogs([...logs, events]);
  }

  function mouseOverH2() {
    let events = {
      time: timeStamp,
      name: 'mouseOverH2',
    };
    setLogs([...logs, events]);
  }

  function mouseOutH2() {
    let events = {
      time: timeStamp,
      name: 'mouseOutH2',
    };
    setLogs([...logs, events]);
  }

  function mouseOverDiv() {
    let events = {
      time: timeStamp,
      name: 'mouseOverDiv',
    };
    setLogs([...logs, events]);
  }
  function mouseOutDiv() {
    let events = {
      time: timeStamp,
      name: 'mouseOutDiv',
    };
    setLogs([...logs, events]);
  }

  return (
    <>
    <div className={mouseStyle.container}>
      <div className={mouseStyle.text}>
        <h1 onMouseOver={mouseOverH1} onMouseOut={mouseOutH1}>
          I am heading one
        </h1>
        <h2 onMouseOver={mouseOverH2} onMouseOut={mouseOutH2}>
          I am heading two
        </h2>
        <div onMouseOver={mouseOverDiv} onMouseOut={mouseOutDiv}>
          I am div
        </div>
      </div>

      <table className={mouseStyle.table}>
        <thead>
          <th>Time</th>
          <th>Event</th>
        </thead>
        <tbody>
          {logs.map((item) => {
            return (
              <tr>
                <td>{item.time}</td>
                <td>{item.name}</td>
              </tr>
            );
          })}
        </tbody>
      </table>
      </div>
    </>
  );
}

export default MouseEvent;
