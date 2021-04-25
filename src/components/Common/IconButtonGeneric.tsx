import React, { FC } from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';

interface IconButtonGenericProps {
    // size?: string;
    sm?: boolean;
    md?: boolean;
    lg?: boolean;
}

const IconButton = styled.button`
    background: ${Colors.white};
    border: 1px solid ${Colors.gray03};
    border-radius: 4px;
    margin-right: 1rem;
    /* width:${(props: IconButtonGenericProps) => props.sm && "1rem"}
            ${(props: IconButtonGenericProps) => props.md && "1.5rem"} 
            ${(props: IconButtonGenericProps) => props.lg && "2rem"};
    height:${(props: IconButtonGenericProps) => props.sm && "1rem"} 
            ${(props: IconButtonGenericProps) => props.md && "1.5rem"} 
            ${(props: IconButtonGenericProps) => props.lg && "2rem"}; */
`;

export const IconButtonGeneric:FC = () => {

    return (
        <IconButton lg>
            IconButton
        </IconButton>
    )
}
export default IconButtonGeneric;