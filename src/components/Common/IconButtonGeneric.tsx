import React from 'react';
import styled from 'styled-components';
import { Colors } from '../../styledHelpers/Colors';
interface IconButtonGenericProps {
    className?: string;
    alt: string;
    src: string;
}
  
const IconButton = styled.img`
    /* border: 1px solid red; */
    &.sm {
        width: 1rem;
        height: 1rem;
    }
    &.md {
        width: 1.5rem;
        height: 1.5rem;
    }
    &.lg {
        width: 2rem;
        height: 2rem;
    }
    &.white {
        background: ${Colors.white};
    }
    &.h-margin-right-16 {
        margin-right: 1rem;
    }
`;

export const IconButtonGeneric = (props: IconButtonGenericProps) => {

    return (
        <IconButton className={props.className} src={props.src} alt={props.alt}/>
    )
}
export default IconButtonGeneric;