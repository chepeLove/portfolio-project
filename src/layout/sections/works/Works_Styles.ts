import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {theme} from "../../../styles/Theme";
import {Link} from "../../../components/Link";
import {Button} from "../../../components/Button";

const Works = styled.section`


  ${FlexWrapper} {
    gap: 30px;
  }
`

const Work = styled.div`
  background-color: ${theme.colors.secondaryBg};


  ${Link} {
    padding: 10px 0;

    & + ${Link} {
      margin-left: 20px;
    }
  }
`

const ImageWrapper = styled.div`
  position: relative;

  ${Button} {
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -30%);
    opacity: 0;
    transition: ${theme.animation.transition};

    &::before {
      width: 100%;
      height: 100%;
    }
  }

  &::before {
    content: "";
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 0, 0, 0.30);
    backdrop-filter: blur(4px);
    opacity: 0;
    transition: ${theme.animation.transition};
  }

  &:hover {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
      transform: translate(-50%, -50%);
    }
  }

  @media ${theme.media.tablet} {
    &::before {
      opacity: 1;
    }

    ${Button} {
      opacity: 1;
    }
  }
`

const Image = styled.img`
  width: 100%;
  height: 240px;
  object-fit: cover;

`
const Description = styled.div`
  padding: 25px 20px;
`


const Title = styled.h3`

`

const Text = styled.p`
  margin: 14px 0 10px;
`

export const Styles = {
    Works,
    Work,
    ImageWrapper,
    Image,
    Description,
    Title,
    Text
}