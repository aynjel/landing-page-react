import styled from "styled-components";

const FormContainer = styled.div`
    form{
        display: grid;
        grid-template-columns: 1fr auto;
        margin: 2rem 0;
        input{
            border: 0;
            border-radius: 5px 0 0 5px;
            padding: 1rem;
            width: 100%;
            &:focus{
                outline: none;
            }
        }
        button{
            background: var(--secondary);
            border: 0;
            border-radius: 0 5px 5px 0;
            color: var(--white);
            cursor: pointer;
            font-size: 1rem;
            font-weight: 700;
            padding: 1rem;
            text-transform: uppercase;
            width: 100%;
            &:hover{
                background: var(--tertiary);
            }
        }
    }
`;

function Form() {
    return (
        <FormContainer>
            <form>
                <input type="text" placeholder="Enter your email" />
                <button>Get Started</button>
            </form>
        </FormContainer>
    )
}

export default Form