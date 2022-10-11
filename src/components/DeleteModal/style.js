import styled from 'styled-components'

export const DeleteModalDiv = styled.div`
  background-color: rgba(0, 0, 0, 0.5);

  display: flex;
  justify-content: center;
  align-items: center;

  width: 100%;
  height: 100%;

  position: fixed;
  top: 0;
  left: 0;

  .delete {
    svg {
      align-self: flex-end;
    }

    background-color: var(--light-grey);
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 1rem;

    padding: 1rem;

    border-radius: 4px;

    .buttons {
      width: 100%;
      display: flex;

      justify-content: space-around;

      button {
        border: none;
        background-color: var(--primary);
        color: var(--light-grey);
        padding: 0.5rem;
        border-radius: 4px;

        font-family: 'Poppins', sans-serif;
        font-weight: bold;
      }
    }
  }
`
