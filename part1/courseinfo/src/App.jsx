const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  );
};

const Part = (props) => {
  return (
    <p>{props.name} {props.exerciseCount}</p>
  );
}

const Content = (props) => {
  return (
    <>
      <Part name={props.parts[0].name} exerciseCount={props.parts[0].exercises} />
      <Part name={props.parts[1].name} exerciseCount={props.parts[1].exercises} />
      <Part name={props.parts[2].name} exerciseCount={props.parts[2].exercises} />
    </>
  );
};

const Total = (props) => {
  return (<p>Number of exercises {props.parts[0].exercises + props.parts[1].exercises + props.parts[2].exercises}</p>);
};

const App = () => {
  const course = 'Half Stack application development';

  const parts = [
    {
      name: 'Fundamentals of React',
      exercises: 10
    },
    {
      name: 'Using props to pass data',
      exercises: 7
    },
    {
      name: 'State of a component',
      exercises: 14
    }
  ];

  return (
    <>
      <Header courseName={course} />
      <Content parts={parts} />
      <Total parts={parts} />
    </>
  )
};

export default App;
