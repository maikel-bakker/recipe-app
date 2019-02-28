import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';
import img from '../images/menu-background.jpg';
import { LayoutContextConsumer } from '../LayoutContext';

const StyledNav = styled.nav`
    ${({ layout }) => {
        if (layout.state.navExpanded) {
            return `
                width: ${layout.navWidth.expanded}
            `;
        }

        return `
            justify-content: center;
            width: ${layout.navWidth.default}
        `;
    }}
    position: fixed;
    top: 0;
    bottom: 0;
    left: 0;
    display: flex;
    align-items: center;
    padding: 50px;
    transition: width 0.4s ease-out;
    font-family: 'Quicksand', sans-serif;
    background-color: #2d3856;

    &:before {
        content: '';
        position: absolute;
        z-index: 0;
        top: 0;
        left: 0;
        bottom: 0;
        right: 0;
        opacity: 0.1;
        background-image: url(${img});
        background-size: cover;
    }
`;

const StyledNavList = styled.ul`
    position: relative;
    z-index: 1;
    margin: 0;
    padding: 0;
    list-style: none;
`;

const StyledNavItem = styled.li`
    margin: 2em 0;
    font-size: 20px;
`;

const StyledNavLink = styled(Link)`
    color: rgba(255, 255, 255, 0.5);
    text-decoration: none;
    text-transform: uppercase;

    &:hover {
        color: white;
    }
`;

export const Nav = () => {
    return (
        <LayoutContextConsumer>
            {context => (
                <StyledNav layout={context}>
                    <StyledNavList>
                        <StyledNavItem>
                            <StyledNavLink to="/">Recipes</StyledNavLink>
                        </StyledNavItem>
                        <StyledNavItem>
                            <StyledNavLink to="/schedule">Schedule</StyledNavLink>
                        </StyledNavItem>
                        <StyledNavItem>
                            <StyledNavLink to="/add-recipe-form">Form</StyledNavLink>
                        </StyledNavItem>
                    </StyledNavList>
                </StyledNav>
            )}
        </LayoutContextConsumer>
    );
};


