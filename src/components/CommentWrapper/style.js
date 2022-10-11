import styled from 'styled-components'

export const CommentDiv = styled.div`
  img {
    width: 25px;
  }

  display: flex;
  flex-direction: column;

  margin-bottom: 1rem;

  .random-name,
  .random-email {
    font-family: 'Poppins', sans-serif;
  }

  .random-name {
    text-transform: capitalize;
    font-weight: bold;
  }
  .random-email {
    text-transform: lowercase;
  }

  .comment-header {
    display: flex;
    gap: 0.5rem;
    align-items: center;
  }

  .comment {
    font-size: 0.9rem;
    margin: 0 2rem;
  }
`
