import React from 'react';
import styled, { css } from 'styled-components';

// Styled components
const Btn = styled.button`
    display: inline-block;
    padding: 0.75rem 1.5rem;
    font-weight: ${({ theme }) => theme.typography.bold};
    font-size: 16px;
    color: rgba(0, 0, 0, 0.6);
    border: 0;
    border-radius: 40px;
    outline: none;
    cursor: pointer;
    transition: background 0.4s, color 0.4s;
    // Modifica singola proprietà
    background: ${(props) =>
        props.primary
            ? props.theme.colors.primary
            : props.theme.colors.default};
    // Modifica molteplici proprietà
    ${({ margin }) =>
        margin &&
        css`
            margin: ${margin};
        `}
    // Hover
    &:hover {
        color: ${({ theme }) => theme.colors.white};
        background: ${({ theme }) => theme.colors.gray};
    }
`;

// Override a component (your own or 3rd party like materia-ui)
const ShadowButton = styled(Btn)`
    box-shadow: 0 4px 7px rgba(0, 0, 0, 0.25);
`;

// Main Component
const Button = ({ primary, margin, children }) => {
    // Methods
    const handleClick = () => {
        alert('Click!!');
    };

    // Render
    return (
        <ShadowButton primary={primary} margin={margin} onClick={handleClick}>
            {children}
        </ShadowButton>
    );
};
export default Button;