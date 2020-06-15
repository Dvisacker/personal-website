import Layout from "@src/components/layout";
import useTranslation from "next-translate/useTranslation";
import { Pane, Heading, UnorderedList, ListItem, Paragraph, majorScale } from "evergreen-ui";
import { useSpring, animated } from "react-spring";

const Resume: React.FC = () => {
    const { t } = useTranslation();
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 3000 },
    });

    return (
        <Layout>
            <animated.div style={animation}>
                <Pane display="flex" justifyContent="space-between">
                    <Pane>
                        <Heading size={900}>{t("common:resume")}</Heading>
                        <Pane marginTop={majorScale(3)}>
                            <Heading size={700}>Education</Heading>
                            <UnorderedList>
                                <ListItem>
                                    <Heading size={600}>Seoul National University</Heading>
                                    <Paragraph color="muted">
                                        Master's Degree, College of Mechanical and Aerospace Engineering
                                    </Paragraph>
                                    <Paragraph color="muted">2014-2016</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Heading size={600}>Ecole des Mines de Saint-Etienne</Heading>
                                    <Paragraph color="muted">
                                        Engineer's Degree, Dual Master Degree in Management and Engineering
                                    </Paragraph>
                                    <Paragraph color="muted">2011-2014</Paragraph>
                                </ListItem>
                            </UnorderedList>
                            <Heading size={700}>Career</Heading>
                            <UnorderedList>
                                <ListItem>
                                    <Heading size={600}>Co-founder/Lead Blockchain Developer @ Proofsuite</Heading>
                                    <Paragraph color="muted">
                                        Worked on various projects related to blockchain and fintech. Algorithmic
                                        trading
                                    </Paragraph>
                                    <Paragraph color="muted">May 2017 - Present</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Heading size={600}>Developer @ Xendit Philippines</Heading>
                                    <Paragraph color="muted">
                                        Developed payment backend connecting existing Xendit infrastructure with
                                        multitudes of philippino banks
                                    </Paragraph>
                                    <Paragraph color="muted">2019-2020</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Heading size={600}>
                                        Quorum Blockchain Ambassador @ JP Morgan Chase & Co.(Seoul, Korea)
                                    </Heading>
                                    <Paragraph color="muted">
                                        Hosted a hackathon, provided technical support and presentation on JP Morgan's
                                        private version of Ethereum
                                    </Paragraph>
                                    <Paragraph color="muted">2019</Paragraph>
                                </ListItem>
                            </UnorderedList>
                            <Heading size={700}>Experiences</Heading>
                            <UnorderedList>
                                <ListItem>
                                    <Heading size={600}>
                                        Presentation on algorithmic trading at SKKU (Seoul, Korea)
                                    </Heading>
                                    <Paragraph color="muted">
                                        Course covering various algorithmic and quant strategies
                                    </Paragraph>
                                    <Paragraph color="muted">April 2019</Paragraph>
                                </ListItem>
                                <ListItem>
                                    <Heading size={600}>
                                        Presentation on decentralized finance at SKKU (Seoul, Korea)
                                    </Heading>
                                    <Paragraph color="muted">
                                        Course covering various topics related to decentralized finance
                                    </Paragraph>
                                    <Paragraph color="muted">April 2020</Paragraph>
                                </ListItem>
                            </UnorderedList>
                        </Pane>
                    </Pane>
                    <Pane>
                        <Heading size={900} marginTop={majorScale(3)}>
                            SKILLS
                        </Heading>
                        <Pane marginTop={majorScale(3)}>
                            <Heading size={700}>Main Programming Languages</Heading>
                            <UnorderedList>
                                <ListItem>
                                    <Heading size={600}>Javascript . Typescript . Golang . Python</Heading>
                                    <Paragraph color="muted">
                                        I have completed several large projects with each of these languages
                                    </Paragraph>
                                </ListItem>
                            </UnorderedList>
                            <Heading size={700}>Frontend</Heading>
                            <UnorderedList>
                                <ListItem>
                                    <Heading size={600}>React . Vue.js . CSS</Heading>
                                    <Paragraph color="muted">
                                        I am most at ease with React but have completed several projects with other
                                        frameworks
                                    </Paragraph>
                                </ListItem>
                            </UnorderedList>
                            <Heading size={700}>Date Science / AI</Heading>
                            <UnorderedList>
                                <ListItem>
                                    <Heading size={600}>Pandas . Keras . Tensorflow . Jupyter</Heading>
                                    <Paragraph color="muted">
                                        I have a good general understanding of statistics, data science and AI. Mostly
                                        applied in the domain of algorithmic trading
                                    </Paragraph>
                                </ListItem>
                            </UnorderedList>
                            <Heading size={700}>Blockchain</Heading>
                            <UnorderedList>
                                <ListItem>
                                    <Heading size={600}>Ethereum Web3.js Solidity Bitcoin</Heading>
                                    <Paragraph color="muted">
                                        Lots of experience with Ethereum smart-contracts and decentralized applications
                                    </Paragraph>
                                </ListItem>
                            </UnorderedList>
                            <Heading size={700}>Devops, Databases, etc.</Heading>
                            <UnorderedList>
                                <ListItem>
                                    <Heading size={600}>
                                        Docker . Kubernetes . AWS . MongoDB . SQL . Redis . RabbitMQ
                                    </Heading>
                                </ListItem>
                            </UnorderedList>
                        </Pane>
                    </Pane>
                </Pane>
            </animated.div>
        </Layout>
    );
};

export default Resume;
