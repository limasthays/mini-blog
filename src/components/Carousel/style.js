import styled from 'styled-components'

export const StyledCarousel = styled.div`
  display: flex;
  justify-content: center;

  .open-album {
    display: flex;
    justify-content: center;
    gap: 1rem;

    max-width: 70vw;
    overflow: auto;

    img {
      width: 50px;
    }
  }
`
