import styled from 'styled-components'

export const PostHeaderDiv = styled.div`
  display: flex;
  justify-content: space-between;

  font-family: 'Poppins', sans-serif;
  font-style: normal;
  font-size: 1rem;
  line-height: 24px;

  .name {
    font-weight: 700;
  }

  .username {
    text-transform: lowercase;
    font-weight: 300;
  }

  .post-header {
    cursor: pointer;
  }

  .actions {
    width: 100px;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    .elipsis {
      align-self: flex-end;
    }
  }
`
