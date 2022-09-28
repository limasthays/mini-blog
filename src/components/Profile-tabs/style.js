import styled from 'styled-components'

export const NavTabs = styled.nav`
  ul {
    list-style: none;

    display: flex;
    justify-content: space-evenly;
  }

  label {
    cursor: pointer;
    display: block;
    font-family: 'Poppins', sans-serif;
  }

  .radio-tab {
    display: none;
  }

  .radio-tab:checked ~ label {
    border-bottom: 3px solid var(--primary);
    font-weight: bold;
  }
`
