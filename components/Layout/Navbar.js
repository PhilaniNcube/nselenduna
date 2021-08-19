import React from 'react';
import styled from 'styled-components';
import Link from 'next/link';
import { RiMenuFoldLine } from 'react-icons/ri';

const Wrapper = styled.header`
  width: 100%;
  background-color: var(--dark);
  height: 10vh;

  .container {
    height: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;
    color: var(--white);

    .logo {
      height: 100%;

      img {
        padding: 2px 0;
        height: 100%;
        object-fit: cover;
      }
    }

    .menu {
      display: none;
    }

    .navbar {
      display: flex;
      height: 100%;
      align-items: center;

      li {
        font-size: 1.2rem;
        padding: 0.8rem;
        font-weight: 700;
        display: flex;
        align-items: center;
        height: 100%;
        transition: 0.2s;

        &:hover {
          color: var(--brown);
          background-color: var(--white);
        }
      }
    }
  }
`;

const Navbar = () => {
  return (
    <Wrapper>
      <div className="container">
        <div className="logo">
          <Link href="/" passHref>
            <img src="/images/logo-white.png" alt="Nselenduna Consulting" />
          </Link>
        </div>

        <div className="menu">
          <RiMenuFoldLine />
        </div>

        <nav className="navbar">
          <li className="nav-link">
            <Link href="/">Home</Link>
          </li>
          <li className="nav-link">
            <Link href="/projects">Projects</Link>
          </li>
          <li className="nav-link">
            <Link href="/about">About</Link>
          </li>
          <li className="nav-link">
            <Link href="/contact">Contact</Link>
          </li>
        </nav>
      </div>
    </Wrapper>
  );
};

export default Navbar;
