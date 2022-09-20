import styled from 'styled-components'

export const NewPostDiv = styled.div`
  display: flex;
  flex-direction: column;
  gap: var(--sm);
  h2 {
    font-size: var(--sm);
  }
  input {
    height: var(--md);
    font-family: 'Open Sans', sans-serif;
  }

  textarea {
    height: var(--lg);
    resize: none;
    font-family: 'Open Sans', sans-serif;
  }
`
