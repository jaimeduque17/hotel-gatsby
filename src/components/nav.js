import React from 'react'
import { Link } from 'gatsby'
import styled from '@emotion/styled'

// const Nav = styled('nav')` ... `
const Nav = styled.nav`
    display: flex;
    justify-content: center;
    padding-bottom: 3rem;
    @media (min-width: 768px) {
        padding-bottom: 0;
    }
`

const NavLink = styled(Link)`
    color: #FFF;
    font-size: 1.6rem;
    font-weight: 700;
    line-height: 1rem;
    font-family: 'PT Sans', sans-serif;
    text-decoration: none;
    padding: 1rem;
    margin: 0 1rem 0 0;

    &:last-of-type{
        margin: 0;
    }
    &.actual-page {
        border-bottom: 2px solid #FFF;
    }
`

const Navigation = () => {
    return (
        <Nav>
            <NavLink
                to={'/'}
                activeClassName="actual-page"
            >Home</NavLink>
            <NavLink
                to={'/about'}
                activeClassName="actual-page"
            >About us</NavLink>
        </Nav>
    )
}

export default Navigation