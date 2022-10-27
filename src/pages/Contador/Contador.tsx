import { useState } from 'react'
import { Button } from './components/Button'

function Contador() {
  const [counter, setCounter] = useState(0)

  function handleIncrement() {
    setCounter(counter + 1)
  }

  function handleDecrement() {
    setCounter(counter - 1)
  }

  function handleReset() {
    setCounter(0)
  }
  return (
    <div className="flex h-screen">
      <div className="m-auto">
        <h1 className="text-xl text-center">Contador {counter}</h1>
        <div className="flex space-x-3">
          <Button handleAction={handleIncrement} buttonText="Incrementar" />
          <Button handleAction={handleDecrement} buttonText="Decrementar" />
          <Button handleAction={handleReset} buttonText="Resetar" />
        </div>
      </div>
    </div>
  )
}

export default Contador
