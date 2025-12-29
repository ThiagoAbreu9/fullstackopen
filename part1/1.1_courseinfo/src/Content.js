export function Content(props) {
  return (
    <div>
      {props.course.parts.map((part) => (
        <p>{part.name} {part.exercises}</p>
      ))}
    </div>
  )
}