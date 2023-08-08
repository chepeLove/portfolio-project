import styled, {css} from "styled-components";
import {theme} from "../../../styles/Theme";
import {Link} from "react-scroll";

//Menu


const MenuItem = styled.li`
  position: relative;
  cursor: pointer;
`

const Mask = styled.span`
  display: inline-block;
  position: absolute;
  top: 0;
  left: 0;
  height: 50%;
  overflow: hidden;
  color:${theme.colors.font};
  transition: ${theme.animation.transition};
  
  & + & {
    top:50%;
    span {
      display: inline-block;
      transform: translateY(-50%);
    }
  }
`

const NavLink = styled(Link)`
  text-align: center;
  font-weight: 400;
  font-family: Josefin Sans,sans-serif;
  font-size: 30px;
  color: transparent;

  &::before{
    content: '';
    display: inline-block;
    height: 3px;
    background-color: ${theme.colors.borderColor};

    position: absolute;
    top: 50%;
    left: -10px;
    right: -10px;
    z-index: 1;

    transform: scale(0);
    ${theme.animation.transition}
  }

  &:hover, &.active {
    &::before{
      transform: scale(1);
    }

    ${Mask}{
      transform: skewX(12deg) translateX(5px);
      color: ${theme.colors.font};
      & + ${Mask}{
        transform: skewX(12deg) translateX(-5px);
      }
    }
  }
`

//Mobile Menu

const MobileMenu = styled.nav`
`

const BurgerButton = styled.button<{ isOpen: boolean }>`
  position: fixed;
  top: -100px;
  right: -100px;
  width: 200px;
  height: 200px;
  z-index: 9999999;

  span {
    display: block;
    width: 36px;
    height: 2px;
    background-color: ${theme.colors.font};
    position: absolute;
    bottom: 50px;
    left: 40px;

    ${props => props.isOpen && css<{ isOpen: boolean }>`
      background-color: rgba(255, 255, 255, 0);
    `}
    &::before {
      content: "";
      display: block;
      width: 36px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(-10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(-45deg) translateY(0);
      `}
    }

    &::after {
      content: "";
      display: block;
      width: 24px;
      height: 2px;
      background-color: ${theme.colors.font};
      position: absolute;
      transform: translateY(10px);

      ${props => props.isOpen && css<{ isOpen: boolean }>`
        transform: rotate(45deg) translateY(0);
        width: 36px;
      `}
    }
    }
  }
`

const MobileMenuPopup = styled.div<{ isOpen: boolean }>`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  left: 0;
  z-index: 99999;
  background: rgba(31, 31, 32, 0.90);
  display: flex;
  justify-content: center;
  align-items: center;
  transform: translateY(-100%);
  transition: .7s ease-in-out;


  
  ul {
    display: flex;
    gap: 10px;
    justify-content: center;
    flex-direction: column;
    align-items: center;
    transition: .7s ease-in-out;
  }

  ${props => props.isOpen && css<{ isOpen: boolean }>`
    transform: translateY(0);
    & ul {
      gap: 40px;
    }
  `}
`

//Desktop Menu

const DesktopMenu = styled.nav`
  ul {
    display: flex;
    gap: 30px;
    justify-content: center;
    font-family: Josefin Sans, sans-serif;
    font-weight: 400;
    font-size: 30px;
    color: ${theme.colors.accent};
  }
`

export const Styles = {
    NavLink,
    Mask,
    MenuItem,
    MobileMenu,
    BurgerButton,
    MobileMenuPopup,
    DesktopMenu,
}