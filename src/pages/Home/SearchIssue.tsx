import { ImageContainer } from '../../pages/Home/styles'
import bannerHeader from '../Home/assets/bannerHome.svg'
import logo from '../Home/assets/logo.svg'

export function SearchIssue() {
  return (
    <ImageContainer>
      <img src={bannerHeader} alt="" className="imgBanner" />
      <img src={logo} alt="" className="imgLogo" />
    </ImageContainer>
  )
}
