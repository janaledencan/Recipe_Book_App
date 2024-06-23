import { useEffect, useState } from "react";
import styled from "styled-components";
import { GiCook } from "react-icons/gi"
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";


function Navigation() {
    return (
        <List>
            <NavLink to={'/cuisine/Italian'}>
                <GiCook />
                <h4>Main</h4>
            </NavLink>

            <NavLink to={'/cuisine/American'}>
                <FaRegHeart />
                <h4>My Favorite</h4>
            </NavLink >

            <NavLink to={'/cuisine/Italian'}>
                <GiCook />
                <h4>Main</h4>
            </NavLink>

            <NavLink to={'/cuisine/American'}>
                <FaRegHeart />
                <h4>My Favorite</h4>
            </NavLink>
        </List>
    )
}


const List = styled.div`
    display:flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Navigation;