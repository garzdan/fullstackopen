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
      <Part name={props.part1Name} exerciseCount={props.part1ExerciseCount} />
      <Part name={props.part2Name} exerciseCount={props.part2ExerciseCount} />
      <Part name={props.part3Name} exerciseCount={props.part3ExerciseCount} />
    </>
  );
};

const Total = (props) => {
  return (<p>Number of exercises {props.exerciseCount}</p>);
};

const App = () => {
  const course = 'Half Stack application development'
  const part1 = 'Fundamentals of React'
  const exercises1 = 10
  const part2 = 'Using props to pass data'
  const exercises2 = 7
  const part3 = 'State of a component'
  const exercises3 = 14

  return (
    <>
      <Header courseName={course} />
      <Content
        part1Name={part1}
        part1ExerciseCount={exercises1}
        part2Name={part2}
        part2ExerciseCount={exercises2}
        part3Name={part3}
        part3ExerciseCount={exercises3}
      />
      <Total exerciseCount={exercises1 + exercises2 + exercises3} />
    </>
  )
};

export default App;
