import { Title, Subtitle } from '../../../../styles/global'
import {
  CardContainer,
  CardContent,
  CardHeader,
  CardDescription,
  CardInfo,
  Loader,
} from './styles'
import {
  ArrowSquareUpRight,
  GithubLogo,
  Buildings,
  Users,
} from 'phosphor-react'
import { fetchUser } from '../../../../lib/axios'
import { useEffect, useState } from 'react'
import { Orbit } from '@uiball/loaders'

interface User {
  login: string
  id: number
  avatar_url: string
  name: string
  company: string
  followers: string
  email: string
  bio: string
}

export function CardProfile() {
  const [user, setUser] = useState<User | null>(null)
  const [error, setError] = useState<Error | null>(null)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await fetchUser('carlos-landerdahl')
        setUser(data)
      } catch (err) {
        console.log(err)
        setError(err as Error)
      }
    }
    fetchData()
  }, [])

  if (error) {
    return (
      <Loader>
        An error occurred while trying to fetch the user information. Please try
        again later.
      </Loader>
    )
  }

  if (!user) {
    return (
      <Loader>
        <Orbit size={35} color="#ffffff" />
      </Loader>
    )
  }

  return (
    <CardContainer>
      <div className="cardImg">
        <img src={user.avatar_url} alt="" />
      </div>
      <CardContent>
        <CardHeader>
          <Title>{user.name}</Title>
          <a href="https://github.com/Carlos-Landerdahl">
            Github
            <ArrowSquareUpRight size={18} />
          </a>
        </CardHeader>
        <CardDescription>
          <Subtitle>{user.bio}</Subtitle>
        </CardDescription>
        <CardInfo>
          <ul>
            <li>
              <GithubLogo size={18} weight="fill" />
              {user.login}
            </li>
            <li>
              <Buildings size={18} weight="fill" />
              Solaland
            </li>
            <li>
              <Users size={18} weight="fill" />
              {user.followers} Seguidores
            </li>
          </ul>
        </CardInfo>
      </CardContent>
    </CardContainer>
  )
}
