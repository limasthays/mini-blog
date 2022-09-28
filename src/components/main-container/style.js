import styled from 'styled-components'

export const MainContainer = styled.main`
  background-color: var(--light-grey);
  padding: var(--md);
  border-top: 4rem solid var(--primary);

  @media (min-width: 768px) {
    width: 70%;
    margin: 0 auto;
  }
`
