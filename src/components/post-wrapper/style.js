import styled from 'styled-components'

export const SinglePostDiv = styled.div`
  border-top: 1px solid var(--md-grey);
  padding: var(--sm) 0;
  display: flex;
  gap: var(--sm);

  .image {
    width: 50px;
    height: 50px;
    background-color: var(--md-grey);
  }

  .name:hover,
  .username:hover {
    color: var(--primary);
  }

  .post-content {
    width: 75%;
    cursor: pointer;
  }

  .post-header {
    cursor: pointer;
  }

  .name,
  .username {
    font-family: 'Poppins';
    font-style: normal;
    line-height: 24px;
    font-size: 18px;
  }
  .name {
    font-weight: 700;
  }

  .username {
    font-weight: 300;
  }

  .title,
  .text-post {
    font-family: 'Open Sans';
    font-style: normal;
    line-height: 22px;
  }

  .title {
    font-weight: 700;
    text-transform: uppercase;
    font-size: 14px;
  }
  .text-post {
    font-weight: 300;
  }
`
