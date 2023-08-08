import React, {useState} from 'react';
import {SectionTitle} from "../../../components/SectionTitle";
import {TabMenu, TabsStatusType} from "./tabMenu/TabMenu";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./work/Work";
import socialImg from './../../../assets/images/proj-1.png'
import timerImg from './../../../assets/images/proj-2.png'
import {Container} from "../../../components/Container";
import {Styles} from "./Works_Styles"
import {AnimatePresence, motion} from "framer-motion"


const tabsItems: Array<{ title: string, status: TabsStatusType }> = [
    {
        title: 'All',
        status: 'all'
    },
    {
        title: 'Landing Page',
        status: 'landing'
    },
    {
        title: 'React',
        status: 'react'
    },
    {
        title: 'SPA',
        status: 'spa'
    },
]

const worksData = [
    {
        title: "Social Network",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: socialImg,
        type: 'spa',
        id: 1,
    },
    {
        title: "Timer",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: timerImg,
        type: 'react',
        id: 2,
    },
    {
        title: "Social Network",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: socialImg,
        type: 'spa',
        id: 3,
    },
    {
        title: "Timer",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: timerImg,
        type: 'react',
        id: 4,
    },
    {
        title: "Social Network",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: socialImg,
        type: 'spa',
        id: 5,
    },
    {
        title: "Timer",
        text: 'Lorem ipsum dolor sit amet, consectetur adipisicing elit,sed do eiusmod tempor incididunt ut labore et dolore magna aliqua Ut enim. Lorem ipsum dolor sit amet, consectetur adipisicing elit.',
        src: timerImg,
        type: 'react',
        id: 6,
    },

]

export const Works: React.FC = () => {

    const [currentFilterStatus, setCurrentFilterStatus] = useState("all")
    let filteredWorks = worksData;

    if (currentFilterStatus === "landing") {
        filteredWorks = worksData.filter(work => work.type === "landing")
    }

    if (currentFilterStatus === "react") {
        filteredWorks = worksData.filter(work => work.type === "react")
    }

    if (currentFilterStatus === "spa") {
        filteredWorks = worksData.filter(work => work.type === "spa")
    }

    function changeFilterStatus(value: TabsStatusType) {
        setCurrentFilterStatus(value)
    }

    return (
        <Styles.Works id={"works"}>
            <Container>
                <SectionTitle>My Works</SectionTitle>
                <TabMenu tabsItems={tabsItems}
                         changeFilterStatus={changeFilterStatus}
                         currentFilterStatus={currentFilterStatus}
                />
                <FlexWrapper justify={'space-between'} align={"flex-start"} wrap={'wrap'}>

                    <AnimatePresence>
                        {filteredWorks.map((work, index) => {
                            return (
                                <motion.div
                                    style = {{ width: "400px", flexGrow: "1",  maxWidth: "540px"}}
                                    layout={true}
                                    initial={{ opacity: 0 }}
                                    animate={{ opacity: 1 }}
                                    exit={{ opacity: 0 }}
                                    key = {work.id}
                                >
                                    <Work title={work.title}
                                          text={work.text}
                                          src={work.src}
                                          key = {work.id}
                                    />
                                </motion.div>
                            )
                        })}
                    </AnimatePresence>

                </FlexWrapper>
            </Container>
        </Styles.Works>
    );
};


