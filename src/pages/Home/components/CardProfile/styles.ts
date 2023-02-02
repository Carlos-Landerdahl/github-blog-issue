import styled from 'styled-components'

export const CardContainer = styled.main`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  max-width: 54rem;
  height: 13.25rem;

  position: relative;
  top: -80px;
  left: 50%;
  transform: translate(-50%, -50%);

  background: ${(props) => props.theme['base-profile']};
  box-shadow: 0px 2px 28px rgba(0, 0, 0, 0.2);
  border-radius: 0.625rem;

  span {
    text-transform: uppercase;
  }

  .cardImg {
    padding-left: 2rem;
    img {
      width: 148px;
      border-radius: 8px;
    }
  }
`

export const CardContent = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  width: 100%;
  padding: 2rem;
`
export const CardHeader = styled.div`
  width: 100%;
  max-width: 38.25rem;

  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;

  a {
    display: flex;
    justify-content: center;
    align-items: center;

    text-decoration: none;
    font-weight: bold;
    text-transform: uppercase;
    padding-right: 0.75rem;
    color: ${(props) => props.theme.blue};

    svg {
      margin-left: 0.2rem;

      &:hover {
        cursor: pointer;
      }
    }
  }
`

export const CardDescription = styled.div`
  display: flex;
  flex-direction: row;
`

export const CardInfo = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: center;

  margin-top: 1rem;
  ul {
    display: flex;
    flex-direction: row;
    gap: 1.5rem;

    color: ${(props) => props.theme['base-subtitle']};
  }

  li {
    display: flex;
    justify-content: flex-start;
    align-items: center;
    gap: 0.3125rem;

    list-style-type: none;
  }
`

export const Loader = styled.div`
  left: 50%;
  top: 50%;
  margin-left: -15px;
  margin-top: -190px;
  position: absolute;
  width: 200px;
  height: 100px;
  color: #fff;
`
