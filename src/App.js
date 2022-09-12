import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

// on change?
function App() {
  const [color, setColor] = useState(randomColor());

  return (
    <div>
      <br />
      <br />
      <br />
      <h1> React Random Color Generator</h1>
      <br />
      <br />
      <br />
      <div
        style={{
          width: 400,
          height: 400,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          fontSize: 35,
          border: '3px solid',
          borderRadius: 300,
          backgroundColor: color,
        }}
      >
        Generated Color:
        <br />
        <br />
        {color}
        <br />
      </div>
      <br />
      <br />
      <br />
      <br />

      <button
        style={{
          width: 80,
          height: 80,
          margin: '0 auto',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
          border: '2px solid',
          fontsize: 50,
          borderRadius: 50,
          backgroundColor: 'white',
        }}
        onClick={() => {
          const color1 = randomColor();
          setColor(color1);
        }}
      >
        Generate
      </button>
    </div>
  );
}

export default App;
