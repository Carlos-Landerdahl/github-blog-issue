import styled from 'styled-components'

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
