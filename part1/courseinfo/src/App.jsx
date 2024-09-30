const Header = (props) => {
  return (
    <h1>{props.courseName}</h1>
  );
};

const Content = (props) => {
  return (
    <>
      <p>{props.part1Name} {props.part1ExerciseCount}</p>
      <p>{props.part2Name} {props.part2ExerciseCount}</p>
      <p>{props.part3Name} {props.part3ExerciseCount}</p>
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
