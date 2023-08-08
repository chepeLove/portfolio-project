import styled from "styled-components";
import {theme} from "../../styles/Theme";
import {font} from "../../styles/Common";

const Footer = styled.footer`
  position: relative;
  background: ${theme.colors.primaryBg};
  padding: 20px 0;
`

const Name = styled.span`
  ${font({family: "Josefin Sans sans-serif", weight: 700, Fmax: 22, Fmin: 16})}
  letter-spacing: 3px;
  color: ${theme.colors.font};

  @media ${theme.media.mobile} {

  }
`

const SocialList = styled.ul`
  display: flex;
  gap: 20px;
  margin: 20px;
`

const SocialItem = styled.li`
`

const SocialLink = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 50%;
  background: rgba(255, 255, 255, 0.10);
  transition: ${theme.animation.transition};
  width: 35px;
  height: 35px;
  color: ${theme.colors.borderColor};

  &:hover {
    color: ${theme.colors.accent};
    transform: translateY(-4px);
  }
`

const Copyright = styled.small`
  opacity: 0.5;
  text-align: center;
  font-size: 12px;
  font-weight: 400;
`

export const Styles = {
    Footer,
    Name,
    SocialList,
    SocialItem,
    SocialLink,
    Copyright
}