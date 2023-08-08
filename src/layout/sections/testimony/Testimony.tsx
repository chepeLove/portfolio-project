import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Icon} from "../../../components/icon/Icon";
import {Slider} from "../../../components/slider/Slider";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Styles} from "../skills/Skills_Styles";
import {Container} from "../../../components/Container";

export const Testimony: React.FC = () => {
    return (
        <StyledTestimony id={"testimony"}>
            <Container>
                <SectionTitle>Testimony</SectionTitle>
                <FlexWrapper direction={'column'} align={'center'}>
                    <Styles.IconWrapper>
                        <Icon iconId={'testimony'}/>
                    </Styles.IconWrapper>
                    <Slider/>
                </FlexWrapper>
            </Container>
        </StyledTestimony>
    );
};

const StyledTestimony = styled.section`

  min-height: 50vh;

  ${Styles.IconWrapper} {
    margin: 28px 0 72px;
  }
`
