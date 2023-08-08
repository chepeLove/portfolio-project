import React from 'react';
import {Icon} from "../../../../components/icon/Icon";
import {FlexWrapper} from "../../../../components/FlexWrapper";
import {Styles} from "../Skills_Styles"

type SkillPropsType = {
    iconId: string
    title: string
    description: string
}

export const Skill = (props: SkillPropsType) => {
    return (
        <Styles.Skill>
            <FlexWrapper direction={"column"} align={"center"}>
                <Styles.IconWrapper>
                    <Icon iconId={props.iconId}/>
                </Styles.IconWrapper>
                <Styles.SkillTittle>{props.title}</Styles.SkillTittle>
                <Styles.SkillText>{props.description}</Styles.SkillText>
            </FlexWrapper>
        </Styles.Skill>
    );
};

