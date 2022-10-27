import UserInfo from './components/UserInfo'

function Introducao() {
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

export default Introducao
