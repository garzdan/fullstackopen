const Course = ({ course }) => {
  return (
    <>
      <Header course={course.name} />
      <Content parts={course.parts} />
    </>
  );
};

const Content = ({ parts }) => {
  const total = parts.reduce((exerciseSum, part) => exerciseSum + part.exercises, 0);

  return (
    <>
      {parts.map((part) =>
        <Part key={part.id} part={part} />
      )}
      <p><b>total of {total} exercises</b></p>
    </>
  );
}

const Header = ({ course }) => {
  return (
    <h2>{course}</h2>
  );
};

const Part = ({ part }) => {
  return (
    <p>{part.name} {part.exercises}</p>
  );
}

export { Course };