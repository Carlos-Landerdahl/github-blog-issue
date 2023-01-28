import { HomePageContainer, ImageContainer } from '../../pages/Home/styles'
import bannerHeader from '../Home/assets/bannerHome.svg'
import logo from '../Home/assets/logo.svg'
import { CardProfile } from './components/CardProfile'

export function SearchIssue() {
  return (
    <HomePageContainer>
      <ImageContainer>
        <img src={bannerHeader} alt="" className="imgBanner" />
        <img src={logo} alt="" className="imgLogo" />
      </ImageContainer>
      <CardProfile />
    </HomePageContainer>
  )
}
