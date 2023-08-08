import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../../../components/SectionTitle";
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Slogan:React.FC = () => {
    return (
        <StyledSlogan>
            <Container>
                <FlexWrapper direction={'column'} align={'center'}>
                    <SectionTitle>I’m interested in freelance opportunities. However, if you have other request or question, don’t hesitate to contact me</SectionTitle>
                    <Button>Hire me</Button>
                </FlexWrapper>
            </Container>
        </StyledSlogan>
    );
};

const StyledSlogan = styled.section`

`