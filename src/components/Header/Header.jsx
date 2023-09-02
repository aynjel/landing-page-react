import { Link } from 'react-router-dom'
import styled from 'styled-components'

const HeaderContainer = styled.div`
    background: var(--quaternary);
    nav {
        display: flex;
        justify-content: center;
        align-items: center;
        ul{
            padding: 0;
            list-style: none;
            display: flex;
            justify-content: center;
            align-items: center;
            li {
                transition: background-color .25s ease-in-out;
                a{
                    padding: .5rem 1rem;
                    text-decoration: none;
                    color: var(--primary);

                    &:hover {
                        background-color: var(--primary);
                        color: var(--white);
                    }
                }
            }
        }
    }
`;

function Header() {
    return (
        <HeaderContainer>
            <nav>
                <ul>
                    <li>
                        <Link to="/">Home</Link>
                    </li>
                    <li>
                        <Link to="/about">About</Link>
                    </li>
                    <li>
                        <Link to="/services">Services</Link>
                    </li>
                </ul>
            </nav>
        </HeaderContainer>
    )
}

export default Header