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
      <Part name={props.part1.name} exerciseCount={props.part1.exercises} />
      <Part name={props.part2.name} exerciseCount={props.part2.exercises} />
      <Part name={props.part3.name} exerciseCount={props.part3.exercises} />
    </>
  );
};

const Total = (props) => {
  return (<p>Number of exercises {props.exerciseCount}</p>);
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = {
    name: 'Fundamentals of React',
    exercises: 10
  }
  const part2 = {
    name: 'Using props to pass data',
    exercises: 7
  }
  const part3 = {
    name: 'State of a component',
    exercises: 14
  }

  return (
    <>
      <Header courseName={course} />
      <Content part1={part1} part2={part2} part3={part3} />
      <Total exerciseCount={part1.exercises + part2.exercises + part3.exercises} />
    </>
  )
};

export default App;
