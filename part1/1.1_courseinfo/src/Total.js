export function Total(props) {
  let sum = 0;
  console.log(props)
  for (let i = 0; i < props.course.parts.length; i++) {
    sum += props.course.parts[i].exercises;
  }
  return (
    <div>
      <p>Total de exercícios: {sum}</p>
    </div>
  )
} 