import { useEffect, useState } from 'react'

function CompMount() {
  const [hidden, setHidden] = useState(false)
  const [hidden2, setHidden2] = useState(false)

  useEffect(() => {
    // monta apenas quando a variavel de dependencia é alterada
    console.log('componente montado')

    // desmonta o componente
    return () => console.log('componente desmontado')
  }, [hidden])

  useEffect(() => {
    // monta toda vez que qualquer componente é alterado
    console.log('componente montado')
  })

  return (
    <div className="flex p-10">
      <div className="m-auto space-y-5">
        {!hidden && <p>texto</p>}
        {!hidden2 && <p>texto2</p>}

        <div className="flex flex-col">
          <button onClick={() => setHidden(!hidden)}>toggle</button>
          <button onClick={() => setHidden2(!hidden2)}>toggle2</button>
        </div>
      </div>
    </div>
  )
}

export default CompMount
