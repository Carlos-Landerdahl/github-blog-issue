import { Title, Subtitle } from '../../../../styles/global'
import imgProfile from '../../assets/imgPerfil.svg'
import {
  CardContainer,
  CardContent,
  CardHeader,
  CardDescription,
  CardInfo,
} from './styles'
import {
  ArrowSquareUpRight,
  GithubLogo,
  Buildings,
  Users,
} from 'phosphor-react'

export function CardProfile() {
  return (
    <CardContainer>
      <div className="cardImg">
        <img src={imgProfile} alt="" />
      </div>
      <CardContent>
        <CardHeader>
          <Title>Carlos Roberto</Title>
          <a href="#">
            Github
            <ArrowSquareUpRight size={18} />
          </a>
        </CardHeader>
        <CardDescription>
          <Subtitle>
            Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu
            viverra massa quam dignissim aenean malesuada suscipit. Nunc,
            volutpat pulvinar vel mass.
          </Subtitle>
        </CardDescription>
        <CardInfo>
          <ul>
            <li>
              <GithubLogo size={18} weight="fill" />
              CarlosLR
            </li>
            <li>
              <Buildings size={18} weight="fill" />
              Solaland
            </li>
            <li>
              <Users size={18} weight="fill" />
              21 seguidores
            </li>
          </ul>
        </CardInfo>
      </CardContent>
    </CardContainer>
  )
}
