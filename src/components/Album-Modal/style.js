import styled from 'styled-components'

export const AlbumModalContainer = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: var(--light-grey);
  border: 2rem solid var(--md-grey);
  padding: 1rem;

  svg {
    width: auto;
    align-self: flex-end;
  }
`
