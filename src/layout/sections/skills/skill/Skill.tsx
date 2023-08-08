import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Styles} from "../Skills_Styles"
import Tilt from 'react-parallax-tilt';

type SkillPropsType = {
    iconId: string
    tittle: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <Styles.Skill>
            <FlexWrapper direction={"column"} align={"center"}>
                <Styles.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </Styles.IconWrapper>
                <Styles.SkillTittle>{props.tittle}</Styles.SkillTittle>
                <Styles.SkillText>{props.description}</Styles.SkillText>
            </FlexWrapper>
        </Styles.Skill>
    );
};

