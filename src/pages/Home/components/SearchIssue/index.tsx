import { SmallPrint, Title } from '../../../../styles/global'
import { Post } from '../PostsIssue'
import { SearchContainerMain, TitleSearch } from './styles'

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
      <Post />
      <Post />
      <Post />
    </SearchContainerMain>
  )
}
