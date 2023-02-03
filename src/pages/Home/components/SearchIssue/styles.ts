import styled from 'styled-components'

export const SearchContainerMain = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  top: -100px;

  max-width: 864px;
  width: 100%;
  margin: 0px auto;

  input {
    width: 100%;
    padding: 12px;
    margin-top: 12px;

    border-radius: 8px;
    border: 1px solid ${(props) => props.theme['base-border']};

    background: ${(props) => props.theme['base-input']};
    color: ${(props) => props.theme['base-text']};

    ::placeholder {
      color: ${(props) => props.theme['base-label']};
    }
  }
`

export const TitleSearch = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
`
export const ContainerCardsIssue = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
`
