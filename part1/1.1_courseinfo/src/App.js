import { Header } from "./Header"
import { Content } from "./Content"
import { Total } from "./Total"

const App = () => {
  const course = 'Desenvolvimento de aplicação Half Stack'
  const part1 = 'Fundamentos da biblioteca React'
  const exercises1 = 10
  const part2 = 'Usando props para passar dados'
  const exercises2 = 7
  const part3 = 'Estado de um componente'
  const exercises3 = 14

  return (
    <div>
      <Header course={course} />
      <Content course={course} part={part1} exercise={exercises1} />
      <Content course={course} part={part2} exercise={exercises2} />
      <Content course={course} part={part3} exercise={exercises3} />
      <Total total={exercises1 + exercises2 + exercises3} />
    </div>
  )
}

export default App