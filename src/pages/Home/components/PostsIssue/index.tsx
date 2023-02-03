import { Title, SmallPrint, Subtitle } from '../../../../styles/global'
import { ContainerCardsIssue } from '../SearchIssue/styles'
import { CardIssue, CardIssueSubtitle, CardIssueTitle } from './style'

export function Post() {
  return (
    <ContainerCardsIssue>
      <CardIssue>
        <CardIssueTitle>
          <Title>Criando card</Title>
          <SmallPrint>Há 1 dia</SmallPrint>
        </CardIssueTitle>
        <CardIssueSubtitle>
          <Subtitle>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod, nisi
            repellat sint obcaecati, temporibus ex ad, illo accusamus deserunt
            tenetur aliquid enim optio! Id corporis aliquam ex amet
            necessitatibus? Obcaecati.
          </Subtitle>
        </CardIssueSubtitle>
      </CardIssue>
    </ContainerCardsIssue>
  )
}
