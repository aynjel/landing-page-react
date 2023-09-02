import styled from 'styled-components'

const HeroContainer = styled.div`
    background: var(--primary);
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    div{
        padding: 0 1rem;
        h1{
            color: var(--white);
            font-size: 3rem;
            font-weight: 700;
            text-align: center;
        }
        p{
            color: var(--white);
            font-size: 1.5rem;
            font-weight: 400;
            text-align: center;
        }
    }
`;

import Form from "./Form";

function Hero() {
    return (
        <HeroContainer>
            <div>
                <h1>
                    A modern publishing platform <br />
                    that helps you build a <br />
                    loyal audience.
                </h1>
                <p>
                    
                </p>
            </div>
            <Form />
        </HeroContainer>
    )
}

export default Hero
