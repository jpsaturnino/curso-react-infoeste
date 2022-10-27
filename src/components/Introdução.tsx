function App() {
  const users = [
    {
      firstName: 'Antonio',
      lastName: 'Fagundes',
      isAdmin: true
    },
    {
      firstName: 'Pedro',
      lastName: 'Antonio',
      isAdmin: false
    },
    {
      firstName: 'Henrique',
      lastName: 'Santos',
      isAdmin: false
    }
  ]

  return (
    <div className="flex h-screen">
      <div className="m-auto">
        {users.map((usuario, index) => (
          <UserInfo
            key={index}
            firstName={usuario.firstName}
            lastName={usuario.lastName}
            isAdmin={usuario.isAdmin}
          />
        ))}
      </div>
    </div>
  )
}

interface PropsUser {
  firstName: string
  lastName: string
  isAdmin: boolean
}

function UserInfo(props: PropsUser) {
  const { firstName, lastName, isAdmin } = props

  return (
    <>
      <div>
        <h1 className={`text-md font-bold ${isAdmin && 'text-green-500'}`}>
          {firstName}
          {!isAdmin ? lastName : 'oculto'}
        </h1>
      </div>
    </>
  )
}

export default App
