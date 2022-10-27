interface ButtonProps {
  className?: string
  handleAction: () => void
  buttonText: button
}

type button = 'Incrementar' | 'Decrementar' | 'Resetar'

export function Button(props: ButtonProps) {
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
