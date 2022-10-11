import styled from 'styled-components'

export const PageHeaderDiv = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 4rem;
  width: 100%;
  background-color: var(--primary);

  .go-home {
    cursor: pointer;
    color: var(--light-grey);

    svg {
      color: var(--light-grey);
      font-size: 2rem;
    }

    h3 {
      display: inline;
    }
  }
`
