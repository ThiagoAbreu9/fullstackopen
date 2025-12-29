export function Content(props) {
  return (
    <div>
      <h1>{props.course}</h1>
      <p>{props.part} {props.exercise}</p>
    </div>
  )
}