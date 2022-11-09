import useUsers from '@hooks/useUsers'
import Head from 'next/head'

const UserPage = () => {
  const { data: users, submitNewUser, deleteUser } = useUsers()

  const handleClick = () => {
    console.log('clicked')
  }

  return (
    <>
      <Head>
        <title>Cool JSON Placeholder</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <div className="p-2">
        <button className="btn btn-primary mb-2" onClick={handleClick}>
          test
        </button>
        <div className="mb-2">
          <form onSubmit={submitNewUser}>
            <input
              className="input mb-2 block"
              type="text"
              name="firstName"
              placeholder="name"
            />
            <input
              className="input mb-2 block"
              type="text"
              name="lastName"
              placeholder="family"
            />
            <input
              className="input mb-2 block"
              type="text"
              name="email"
              placeholder="email"
            />
            <input
              className="input mb-2 block"
              type="text"
              placeholder="age"
              name="age"
            />
            <input type="submit" value="submit" className="btn btn-accent" />
          </form>
        </div>

        {users?.map((user) => {
          return (
            <div className="flex items-center gap-2 py-2" key={user.id}>
              <button
                onClick={() => deleteUser(user.id)}
                className="btn btn-error btn-circle"
              >
                x
              </button>
              <div>{user.firstName}</div>
              <div>{user.lastName}</div>
              <div>{user.email}</div>
              <div>{user.age}</div>
              <div>{user.id}</div>
            </div>
          )
        })}
      </div>
    </>
  )
}

export default UserPage
