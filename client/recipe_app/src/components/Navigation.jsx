import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
import { GiCook } from "react-icons/gi";
import { FaRegHeart } from "react-icons/fa";
import { NavLink } from "react-router-dom";
import { GiCookingPot } from "react-icons/gi";
import { MdAddCircleOutline } from "react-icons/md";
import { IoFastFoodOutline } from "react-icons/io5";
import { FaBars } from 'react-icons/fa';

function Navigation() {
    const [menuOpen, setMenuOpen] = useState(false);

    const toggleMenu = () => {
        setMenuOpen(!menuOpen);
    };

    useEffect(() => {
        const handleResize = () => {
            if (window.innerWidth > 550) {
                setMenuOpen(false);
            }
        };

        window.addEventListener('resize', handleResize);

        // Cleanup event listener on component unmount
        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (
        <NavContainer>
            <Hamburger onClick={toggleMenu}>
                <FaBars />
            </Hamburger>
            <List $menuOpen={menuOpen}>
                <SLink to={'/cuisine/Italian'}>
                    <GiCook />
                    <h4>Italian</h4>
                </SLink>
                <SLink to={'/cuisine/American'}>
                    <IoFastFoodOutline />
                    <h4>American</h4>
                </SLink>
                <SLink to={'/saved-recipes'}>
                    <FaRegHeart />
                    <h4>Favorite</h4>
                </SLink>
                <SLink to={'/myRecipes/'}>
                    <GiCookingPot />
                    <h4>Recipes</h4>
                </SLink>
                <SLink to={'/create-recipe'}>
                    <MdAddCircleOutline />
                    <h4>Create Recipe</h4>
                </SLink>
            </List>
        </NavContainer>
    );
}

const NavContainer = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    margin: 2rem 0rem;
    position: relative;
`;

const Hamburger = styled.div`
    display: none;
    font-size: 2rem;
    cursor: pointer;
    margin-bottom: 1rem;

    @media (max-width: 550px) {
        display: block;
    }
`;

const List = styled.div`
    display: flex;
    justify-content: center;
    flex-direction: ${props => (props.$menuOpen ? 'column' : 'row')};
    width: 100%;
    margin: 2rem 0rem;

    @media (max-width: 550px) {
        display: ${props => (props.$menuOpen ? 'flex' : 'none')};
        align-items: center;
    }

    @media (min-width: 551px) {
        display: flex;
    }
`;

const SLink = styled(NavLink)`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    border-radius: 20%;
    margin: 0.5rem;
    text-decoration: none;
    width: 6rem;
    cursor: pointer;
    transform: scale(0.8);

    h4 {
        font-size: 0.8rem;
    }

    svg {
        color: #8b0000;
        font-size: 1.5rem;
    }

    &.active {
        background: linear-gradient(to right, #f27121, #e94057);

        svg {
            color: white;
        }
        h4 {
            color: white;
        }
    }
`;

export default Navigation;
