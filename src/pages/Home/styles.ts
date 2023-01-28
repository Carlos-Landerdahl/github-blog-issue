import styled from 'styled-components'

export const HomePageContainer = styled.main`
  display: flex;
  flex-direction: column;
`

export const ImageContainer = styled.header`
  width: 100%;

  position: relative;

  .imgBanner {
    width: 100%;
    height: 18.5rem;

    object-fit: cover;
  }

  .imgLogo {
    width: 9.375rem;
    height: 6.125rem;

    position: relative;
    top: -160px;
    left: 50%;
    transform: translate(-50%, -50%);
  }
`
