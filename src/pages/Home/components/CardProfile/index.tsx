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
import { toast, Bounce } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

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
    const controller = new AbortController()
    const errorMessage = 'Não foi possível, carregar as informações do perfil'

    const fetchData = async () => {
      try {
        const data = await fetchUser('carlos-landerdahl')
        setUser(data)
        toast.success('Seja bem vindo ao GITHUB - Blog', {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          transition: Bounce,
        })
      } catch (err) {
        toast.error(errorMessage, {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: false,
          draggable: true,
          transition: Bounce,
        })
        setError(err as Error)
      }
    }
    fetchData()

    return () => {
      controller.abort()
    }
  }, [])

  if (!user) {
    console.log(error)

    return (
      <Loader>
        <Orbit color="white" />
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
