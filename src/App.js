import logo from './logo.svg';
import './App.css';
import React from 'react';

const OnlyEven = ({ arr }) => {
  const evenNumbers = arr.filter(num => num % 2 === 0);

  return (
    <div>
      {evenNumbers.join(', ')}
    </div>
  );
}

const App = () => {
  return (
    <div>
      <OnlyEven arr={[14, 5, 6, 12, 21, 2]} />
    </div>
  );
}

export default App;
