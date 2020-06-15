/* eslint-disable react/no-unescaped-entities */
import Layout from "../components/layout";
import I18nLink from "next-translate/Link";
import styles from "../styles/utils.module.css";
import { Pane, Heading, majorScale, setClassNamePrefix } from "evergreen-ui";
setClassNamePrefix("ub-");
import GhostButton from "../components/ghostButton";
import { useSpring, animated } from "react-spring";

const HomePage = () => {
    const animation = useSpring({ opacity: 1, from: { opacity: 0 }, config: { duration: 3000 } });

    return (
        <Layout home>
            <animated.div style={animation}>
                <Pane display="flex" flexDirection="column" alignItems="center">
                    <Pane display="flex" flexDirection="column" alignItems="center" margin={majorScale(3)}>
                        <img
                            src="/images/profile.jpeg"
                            className={`${styles.headerHomeImage} ${styles.borderCircle}`}
                        />
                    </Pane>
                    <Pane width="40%" margin={majorScale(3)}>
                        <Heading size={900}>
                            <div>
                                Hi! I'm David. I'm a software engineer and entrepreneur based in Seoul. My background is
                                in engineering and programming. I like clean design, learning new languages, dancing,
                                working out, investing and so much more ...
                            </div>
                        </Heading>
                    </Pane>
                    <I18nLink href="/resume" as={`/resume`}>
                        <GhostButton marginTop={majorScale(3)}>RESUME</GhostButton>
                    </I18nLink>
                    <I18nLink href="/portfolio" as={`/portfolio`}>
                        <GhostButton marginTop={majorScale(3)}>PORTFOLIO</GhostButton>
                    </I18nLink>
                </Pane>
            </animated.div>
        </Layout>
    );
};

export default HomePage;
