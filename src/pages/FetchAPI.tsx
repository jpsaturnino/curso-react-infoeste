import Axios from 'axios'
import { useEffect, useState } from 'react'

interface IGithubProfile {
  avatar_url: string
  name: string
  location: string
}

function FetchApi() {
  /* fetch('https://api.github.com/users/jpsaturnino')
    .then((res) => {
      return res.json()
    })
    .then((data) => console.log(data)) */

  const [githubProfile, setGithubProfile] = useState<IGithubProfile | null>(
    null
  )

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await Axios.get('https://api.github.com/users/jpsaturnino')
        console.log(res.data)
        setGithubProfile(res.data)
      } catch (err) {
        console.log('Error getting data: ', err)
      }
    }

    getData()
  }, [])

  return (
    <div className="flex p-10">
      <div className="m-auto space-y-5">
        <img
          src={githubProfile ? githubProfile.avatar_url : ''}
          width={100}
          height={100}
        />
        <p>{githubProfile ? githubProfile.name : ''}</p>
        <p>{githubProfile ? githubProfile.location : ''}</p>
      </div>
    </div>
  )
}

export default FetchApi
