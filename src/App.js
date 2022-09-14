import './App.css';
import randomColor from 'randomcolor';
import { useState } from 'react';

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
          width: 450,
          height: 450,
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
        Generated Color: {color}
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
          backgroundColor: 'black',
          color: 'white',
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
