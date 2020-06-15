import Head from "next/head";
import { majorScale, Pane } from "evergreen-ui";
import { getRawURL } from "@src/utils";
import { Link, Button, TabNavigation, Tab, SelectMenu } from "evergreen-ui";
import Router from "next-translate/Router";
import I18nLink from "next-translate/Link";
import useTranslation from "next-translate/useTranslation";
import i18nConfig from "../i18n.json";
import { getState } from "../context";

const { allLanguages, allLanguageNames } = i18nConfig;

export const siteTitle = "Personal Website";

type LayoutProps = {
    children: JSX.Element;
    home?: boolean;
};

const Layout = ({ children, home }: LayoutProps): JSX.Element => {
    const { t, lang } = useTranslation();
    const [{ layout }, dispatch] = getState();
    const { currentTab } = layout;

    const tabs = ["home", "resume", "portfolio"];
    const links = ["/", "/resume", "/portfolio"];

    return (
        <Pane justifyContent="center" padding={majorScale(3)}>
            <Head>
                <link rel="icon" href="/favicon.ico" />
                <meta name="description" content="David Van Isacker's website" />
                <meta
                    property="og:image"
                    content={`https://og-image.now.sh/${encodeURI(
                        siteTitle,
                    )}.png?theme=light&md=0&fontSize=75px&images=https%3A%2F%2Fassets.vercel.com%2Fimage%2Fupload%2Ffront%2Fassets%2Fdesign%2Fnextjs-black-logo.svg`}
                />
                <meta name="og:title" content={siteTitle} />
                <meta name="twitter:card" content="summary_large_image" />
            </Head>
            <Pane width="100%" display="flex" justifyContent="flex-end">
                {/* <BackgroundVideo tab={currentTab} /> */}
                <TabNavigation>
                    {tabs.map((tab, index) => (
                        <I18nLink href={`${links[index]}`} key={tab} as={`${links[index]}`}>
                            <Tab
                                is="a"
                                href="#"
                                key={tab}
                                onSelect={() => dispatch({ type: "CHANGE_TAB", payload: { newTab: index } })}
                                isSelected={index === currentTab}
                            >
                                <Button height={48} appearance="minimal">
                                    {t(`common:${tabs[index]}`)}
                                </Button>
                            </Tab>
                        </I18nLink>
                    ))}
                    <SelectMenu
                        height={65}
                        width={140}
                        hasTitle={false}
                        hasFilter={false}
                        title="Select Language"
                        options={allLanguages.map((value) => ({
                            label: allLanguageNames[value],
                            value,
                        }))}
                        onSelect={(item) =>
                            Router.pushI18n({
                                url: getRawURL(window.location.pathname),
                                options: { lang: item.value },
                            })
                        }
                    >
                        <Button appearance="minimal">{t(`common:language-name-${lang}`)}</Button>
                    </SelectMenu>
                </TabNavigation>
            </Pane>
            <Pane justifyContent="center" width="100%" padding={majorScale(10)}>
                <Pane display="flex" flexDirection="column">
                    <main>{children}</main>
                    {!home && (
                        <Pane marginTop={majorScale(5)}>
                            <I18nLink href="/" as={`/`}>
                                <Link href="#">{`←${t("common:backHome")}`}</Link>
                            </I18nLink>
                        </Pane>
                    )}
                </Pane>
            </Pane>
        </Pane>
    );
};

export default Layout;
