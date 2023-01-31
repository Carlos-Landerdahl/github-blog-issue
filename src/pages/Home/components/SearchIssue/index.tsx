import { SmallPrint, Subtitle, Title } from '../../../../styles/global'
import {
  CardIssue,
  CardIssueSubtitle,
  CardIssueTitle,
  ContainerCardsIssue,
  SearchContainerMain,
  TitleSearch,
} from './styles'

export function SearchIssue() {
  return (
    <SearchContainerMain>
      <TitleSearch>
        <Title>Publicações</Title>
        <SmallPrint>6 publicações</SmallPrint>
      </TitleSearch>
      <div>
        <input type="text" placeholder="Buscar conteúdo" />
      </div>
      <ContainerCardsIssue>
        <CardIssue>
          <CardIssueTitle>
            <Title>Criando card</Title>
            <SmallPrint>Há 1 dia</SmallPrint>
          </CardIssueTitle>
          <CardIssueSubtitle>
            <Subtitle>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod,
              nisi repellat sint obcaecati, temporibus ex ad, illo accusamus
              deserunt tenetur aliquid enim optio! Id corporis aliquam ex amet
              necessitatibus? Obcaecati.
            </Subtitle>
          </CardIssueSubtitle>
        </CardIssue>
      </ContainerCardsIssue>
    </SearchContainerMain>
  )
}
