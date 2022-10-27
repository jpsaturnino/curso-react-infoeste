import { useState } from 'react'

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

interface ButtonProps {
  className?: string
  handleAction: () => void
  buttonText: button
}

type button = 'Incrementar' | 'Decrementar' | 'Resetar'

function Button(props: ButtonProps) {
  const { className, handleAction, buttonText } = props

  const type = {
    Incrementar: 'bg-green-500',
    Decrementar: 'bg-red-500',
    Resetar: 'bg-blue-500'
  }

  return (
    <button
      className={`px-2 py-1 ${type[buttonText]} ${className}`}
      onClick={handleAction}
    >
      {buttonText}
    </button>
  )
}

export default Contador
