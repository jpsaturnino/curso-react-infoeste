import { useForm } from 'react-hook-form'

function Form() {
  const {
    register,
    handleSubmit,
    formState: { errors }
  } = useForm()

  function submit(data) {
    console.log(data)
  }

  return (
    <div>
      <form
        className="flex flex-col w-1/3"
        onSubmit={handleSubmit((data) => submit(data))}
      >
        <input
          type="text"
          className="border-2"
          {...register('name', { required: true, maxLength: 30 })}
          placeholder="Digite seu nome"
        />
        {errors.name?.type === 'required' && (
          <p role="alert">First name is required</p>
        )}
        <input
          type="email"
          className="border-2"
          {...register('email')}
          placeholder="Digite seu email"
        />
        <input
          type="password"
          className="border-2"
          {...register('pass')}
          placeholder="Digite sua senha"
        />
        <button type="submit">Enviar</button>
      </form>
    </div>
  )
}

export default Form
