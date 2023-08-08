import React from 'react';
import {Icon} from "../../components/icon/Icon";
import {FlexWrapper} from "../../components/FlexWrapper";
import {Styles} from "./Footer_Styles";

const SocialItemData = [
    {
        iconId: "instagram"
    },
    {
        iconId: "telegram"
    },
    {
        iconId: "vk"
    },
    {
        iconId: "linkedin"
    },
]

export const Footer: React.FC = () => {
    return (
        <Styles.Footer>
            <FlexWrapper direction={"column"} align={"center"}>
                <Styles.Name>chepeLove</Styles.Name>
                <Styles.SocialList>

                    {SocialItemData.map((icon, index) => {
                        return (
                            <Styles.SocialItem>
                                <Styles.SocialLink>
                                    <Icon viewBox={"0 0 21 21"} height={"21"} width={"21"}
                                          iconId={icon.iconId}/>
                                </Styles.SocialLink>
                            </Styles.SocialItem>
                        )
                    })}

                </Styles.SocialList>
                <Styles.Copyright>© 2023 Ilya Chepelov, All Rights Reserved.</Styles.Copyright>
            </FlexWrapper>
        </Styles.Footer>
    );
};
