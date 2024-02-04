import { useState } from 'react'
import './App.css'

type FormSubmitHandler = (event: React.FormEvent<HTMLFormElement>) => void

interface Button {
  color: string
}

const App = () => {
  const handleSubmit: FormSubmitHandler = e => {
    e.preventDefault();
    console.log('onSubmit')
  }

  const [ buttons, setButtons ] = useState<Button[]>([
    {color: 'red'},
    {color: 'blue'},
    {color: 'yellow'},
    {color: 'green'}
  ])
  
  return (
    <>
      <h1>Simon Says</h1>
      <section>
        <h2>Game Settings</h2>
        <form onSubmit = { handleSubmit }>
          <label htmlFor="numberOfButtons">Number of Buttons</label>
          <input type="number" id="numberOfButtons" min="0" max="100" />
          <button type="submit">Update Settings</button>
        </form>
      </section>
      <section>
        <h2>Game</h2>
        <button>Start Game</button>
        <div aria-label="Game Board">
          {
            buttons.map((button, i) => {
              return (<button style={{backgroundColor: button.color}}><span className="visually-hidden">{i + 1}</span></button>)
            })
          }
        </div>
      </section>
      <section>
        <h2>Score</h2>
        <div className="score">0</div>
      </section>
    </>
  )
}

export default App
