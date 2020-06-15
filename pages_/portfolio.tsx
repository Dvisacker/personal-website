import Layout from "@src/components/layout";
import useTranslation from "next-translate/useTranslation";
import { Text, Link, Pane, Heading, UnorderedList, ListItem, useTheme, majorScale } from "evergreen-ui";
import { useSpring, animated } from "react-spring";

const Portfolio: React.FC = () => {
    const { t } = useTranslation();
    const animation = useSpring({
        opacity: 1,
        from: { opacity: 0 },
        config: { duration: 3000 },
    });

    return (
        <Layout>
            <animated.div style={animation}>
                <Pane>
                    <Heading size={900}>{t("common:portfolio")}</Heading>
                    <Heading size={700} marginTop={majorScale(3)}>
                        A list of my open-source projects
                    </Heading>
                    <UnorderedList marginTop={majorScale(5)}>
                        <ListItem>
                            <Heading size={600}>AMP, a decentralized exchange built on Ethereum</Heading>
                            <Link href="https://github.com/ProofSuite/amp-client">Frontend (React.js)</Link>
                            <br />
                            <Link href="https://github.com/ProofSuite/amp-matching-engine">
                                Matching Engine (Golang)
                            </Link>
                            <br />
                            <Link href="https://github.com/ProofSuite/amp-dex">
                                Ethereum Settlement Layer (Solidity)
                            </Link>
                            <br />
                            <Link href="https://github.com/ProofSuite/amp-deploy">
                                Deployment and Maintenance Tools
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Heading size={600}>
                                Bottlemint, a modified version of redux that synchronizes your frontend with a
                                Tendermint chain
                            </Heading>
                            <Link href="https://github.com/ProofSuite/bottlemint">Github</Link>
                            <br />
                            <Link href="https://github.com/ProofSuite/react-lotion-counter-app">Counter App</Link>
                            <br />
                            <Link href="https://github.com/ProofSuite/react-lotion-interop-app">
                                Ethereum/Tendermint Interop App
                            </Link>
                        </ListItem>
                        <ListItem>
                            <Heading size={600}>
                                Togen-CLI, a commandline tool to configure, generate, compile and deploy groups of
                                smart-contracts
                            </Heading>
                            <Link href="https://github.com/ProofSuite/togen-cli">Github</Link>
                        </ListItem>
                    </UnorderedList>
                </Pane>
            </animated.div>
        </Layout>
    );
};

export default Portfolio;
