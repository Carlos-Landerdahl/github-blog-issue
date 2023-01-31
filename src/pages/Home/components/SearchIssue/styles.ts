import styled from 'styled-components'

export const SearchContainerMain = styled.div`
  display: flex;
  flex-direction: column;

  position: relative;
  top: -100px;

  max-width: 864px;
  width: 100%;
  margin: 0 auto;

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

export const CardIssue = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;

  width: 100%;
  height: 200px;
  margin-top: 3rem;

  background: ${(props) => props.theme['base-post']};
  border-radius: 10px;
`

export const CardIssueTitle = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  width: 100%;

  padding: 32px 32px 0 32px;
  margin-bottom: 20px;
`

export const CardIssueSubtitle = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  padding: 0 32px 32px 32px;
  width: 100%;
`
