import styled from "styled-components";
import {theme} from "../../../styles/Theme";

const Skills = styled.section`
 
`;

const Skill = styled.div`
  width: 330px;
  padding: 42px 20px 56px;
  flex-grow: 1;
  
  @media ${theme.media.mobile} {
    padding: 42px 0 56px;
  }
`

const SkillTittle = styled.h3`
  margin: 70px 0 15px;
  text-transform: uppercase;
`


const SkillText = styled.p`
  text-align: center;
`

const IconWrapper = styled.div`
  position: relative;
  z-index: 0;

  &::before {
    content: "";
    display: inline-block;
    width: 80px;
    height: 80px;
    transform: rotate(45deg) translate(-50%, -50%);
    background: rgba(32, 35, 42, 1);

    position: absolute;
    z-index: -1;
    top: 50%;
    left: 50%;
    transform-origin: top left;
  }
`

export const Styles = {
    Skills,
    Skill,
    SkillTittle,
    SkillText,
    IconWrapper,
}