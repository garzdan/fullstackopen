import { useState } from 'react';

const Header = ({ text }) => {
  return (
    <h1>{text}</h1>
  );
};

const Button = ({ text, onClick}) => {
  return (
    <button onClick={onClick}>{text}</button>
  );
};

const Statistic = ({ text, value }) => {
  return (
    <p>{text} {value}</p>
  );
};

const App = () => {
  // save clicks of each button to its own state
  const [good, setGood] = useState(0);
  const [neutral, setNeutral] = useState(0);
  const [bad, setBad] = useState(0);

  const handleGoodClick = () => setGood(g => g + 1);
  const handleNeutralClick = () => setNeutral(n => n + 1);
  const handleBadClick = () => setBad(b => b + 1);

  return (
    <>
      <Header text="give feedback" />
      <Button text="good" onClick={handleGoodClick} />
      <Button text="neutral" onClick={handleNeutralClick} />
      <Button text="bad" onClick={handleBadClick} />
      <Header text="statistics" />
      <Statistic text="good" value={good} />
      <Statistic text="neutral" value={neutral} />
      <Statistic text="bad" value={bad} />
    </>
  )
}

export default App;
