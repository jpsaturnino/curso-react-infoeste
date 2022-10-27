interface PropsUser {
  firstName: string
  lastName: string
  isAdmin: boolean
}

export default function UserInfo(props: PropsUser) {
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
