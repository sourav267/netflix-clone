/* eslint-disable react/prop-types */
import { useState, createContext, useContext } from "react";
import { Container, Frame, Title, Item, Inner, Header, Body } from './styles/accordion';


const ToggleContext = createContext();

export default function Accordion({ children, ...restProps }) {
    return (
        <Container {...restProps}>
            <Inner>
                {children}
            </Inner>
        </Container>
    )
}

Accordion.Title = function AccordionTitle({ children, ...restProps }) {
    return <Title {...restProps}>{children}</Title>
}

Accordion.Frame = function AccordionFrame({ children, ...restProps }) {
    return <Frame {...restProps}>{children}</Frame>
}

Accordion.Header = function AccordionHeader({ children, ...restProps }) {
    const { toggleShow, setToggleShow } = useContext(ToggleContext);
    return <Header
        onClick={() => setToggleShow(!toggleShow)} {...restProps}
    >
        {children}
        {toggleShow ? (
            <img src="/images/icons/close-slim.png" alt="Close" />
        ) : (
            <img src="/images/icons/add.png" alt="Open" />
        )}
    </Header>
}

Accordion.Item = function AccordionItem({ children, ...restProps }) {
    const [toggleShow, setToggleShow] = useState();
    return <>
        <ToggleContext.Provider value={{ toggleShow, setToggleShow }} >
            <Item {...restProps}>{children}</Item>
        </ ToggleContext.Provider >
    </>
}

Accordion.Body = function AccordionBody({ children, ...restProps }) {
    const { toggleShow } = useContext(ToggleContext);
    return toggleShow ?
        <Body {...restProps}>{children}</Body>
        : null;
}