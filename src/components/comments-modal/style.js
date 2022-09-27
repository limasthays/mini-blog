import styled from 'styled-components'

export const StyledCommmentsModal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  background-color: var(--md-grey);

  padding: 1rem;

  .post-modal {
    display: flex;
    flex-direction: column;
    background-color: var(--light-grey);
    width: 75%;
    min-height: 80vh;
    padding: 2rem;

    svg {
      align-self: flex-end;
    }
  }
`
