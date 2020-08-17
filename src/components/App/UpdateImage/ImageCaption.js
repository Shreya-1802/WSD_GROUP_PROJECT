import React from 'react';
import styled from 'styled-components';

const Caption = styled.div`
    margin-top: 1rem;
    p {
        font-size: 0.875em;
        b {
            font-weight: ${({ theme }) => theme.typography.normal};
            color: ${({ theme }) => theme.colors.quaternary};
        }
    }
`;

const ImageCaption = ({ name, imgsize }) => {
    return (
        <Caption>
            <p>
                <b>Image name:</b> {name}
            </p>
            <p>
                <b>Image size:</b> {imgsize} bytes
            </p>
        </Caption>
    );
};

export default ImageCaption;