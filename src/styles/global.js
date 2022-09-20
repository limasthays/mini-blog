import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
    *{
        margin: 0;
        padding: 0;
        box-sizing: border-box;
    }

    :root{
        --green: hsl(108, 66%, 48%);
        --md-grey: hsl(23, 12%, 74%);
        --light-grey: hsl(24, 12%, 92%);
        
        --xm: 0.5rem;
        --sm: 1rem;
        --md: 2rem;
        --lg: 4rem;
    }

    /*@media (min-width: 768px) {
            :root{
                --xm: 1rem;
                --sm: 2rem;
                --md: 4rem;
                --lg: 8rem;

                --green: pink;
            }
        }*/

    body{
        background-color: var(--light-grey);
        padding: 0 var(--md);
        
        h1, h2, h3{
            font-family: 'Poppins', sans-serif;
        }

        p, span{
            font-family: 'Open Sans', sans-serif;
        }        
    }
`
