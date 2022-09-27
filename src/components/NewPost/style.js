import styled from 'styled-components'

export const NewPostDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sm);
  padding-bottom: var(--sm);
  h2 {
    font-size: var(--sm);
  }

  input {
    height: var(--md);
  }

  textarea {
    height: var(--lg);
    resize: none;
  }

  input,
  textarea {
    font-family: 'Open Sans', sans-serif;
    border-radius: 4px;
    padding: 8px;
    border: 1px solid var(--md-grey);
  }

  @media (min-width: 768px) {
    h2 {
      font-size: 24px;
    }
  }
`
