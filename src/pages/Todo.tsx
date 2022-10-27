import { useState } from 'react'

interface ToDo {
  id: number
  name: string
  done: boolean
}

function Todo() {
  const [inputText, setInputText] = useState('')
  const [todoList, setTodoList] = useState<ToDo[]>([])
  const [operation, setOperation] = useState<'create' | 'update'>('create')
  const [selectedTodo, setSelectedTodo] = useState<ToDo | null>(null)

  function handleInputChange(value: string) {
    setInputText(value)
  }

  function handleAdd() {
    setTodoList([
      ...todoList,
      { id: inputText.length - 1, name: inputText, done: false }
    ])
    setInputText('')
  }

  function handleDelete(todoId: number) {
    setTodoList(todoList.filter((t) => t.id !== todoId))
  }

  function handleEdit() {
    setTodoList(
      todoList.map((t) => {
        if (t.id === selectedTodo?.id) return { ...t, name: inputText }
        return t
      })
    )
    setInputText('')
    setSelectedTodo(null)
    setOperation('create')
  }

  function handleDone(todo: ToDo) {
    setTodoList(
      todoList.map((t) => {
        if (t.id === todo.id) return { ...t, done: !todo.done }
        return t
      })
    )
  }

  const isCreating = operation === 'create'

  return (
    <div className="flex p-10">
      <div className="m-auto space-y-5">
        <h1 className="font-bold text-center font-md">ToDo</h1>
        <div className="flex space-x-4">
          <input
            type="text"
            className="border-2 border-black p-2"
            value={inputText || ''}
            onChange={(e) => handleInputChange(e.target.value)}
          />
          <button onClick={isCreating ? handleAdd : handleEdit}>
            {isCreating ? 'Adicionar' : 'Editar'}
          </button>
        </div>
        <p>Tarefa a ser adicionada: {inputText}</p>
        {todoList.map((todo, i) => {
          return (
            <div key={i} className="flex space-x-2">
              <p className={`${todo.done && 'text-green-500'}`}>{todo.name}</p>
              <button onClick={() => handleDone(todo)}>
                {todo.done ? 'Desfazer' : 'Completar'}
              </button>
              <button onClick={() => handleDelete(todo.id)}>X</button>
              <button
                onClick={() => {
                  setInputText(todo.name)
                  setOperation('update')
                  setSelectedTodo(todo)
                }}
              >
                E
              </button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default Todo
