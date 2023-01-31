import { HomePageContainer, ImageContainer } from './styles'
import bannerHeader from '../Home/assets/bannerHome.svg'
import logo from '../Home/assets/logo.svg'
import { CardProfile } from './components/CardProfile'
import { SearchIssue } from './components/SearchIssue'

export function Homepage() {
  return (
    <HomePageContainer>
      <ImageContainer>
        <img src={bannerHeader} alt="" className="imgBanner" />
        <img src={logo} alt="" className="imgLogo" />
      </ImageContainer>
      <CardProfile />
      <SearchIssue />
    </HomePageContainer>
  )
}
