import { useEffect, useState } from "react";
import styled from "styled-components";
import { GiCook } from "react-icons/gi"
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";


function Navigation() {
    return (
        <List>
            {/* <NavLink to={'/cusine/Italian'}>
                <GiCook />
                <h4>Main</h4>
            </NavLink>
            <NavLink>
                <FaRegHeart />
                <h4>My Favorite</h4>
            </NavLink> */}

            <div>
                <GiCook />
                <h4>Main</h4>
            </div>
            <div>
                <FaRegHeart />
                <h4>My Favorite</h4>
            </div>
        </List>
    )
}


const List = styled.div`
    display:flex;
    justify-content: center;
    margin: 2rem 0rem;
`;

export default Navigation;