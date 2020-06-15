import Head from "next/head";
import Layout from "@src/components/layout";
import Date from "../components/date";
import I18nLink from "next/link";
import { getSortedPostsData } from "../lib/posts";
import useTranslation from "next-translate/useTranslation";
import { Heading, Text, UnorderedList, ListItem, Link, majorScale, useTheme, withTheme } from "evergreen-ui";
import { GetStaticProps } from "next";

interface PostData {
    date: string;
    title: string;
    id: string;
}

const Blog = ({ allPostsData }: { allPostsData: PostData[] }) => {
    const { t } = useTranslation();
    const theme = useTheme();

    return (
        <Layout>
            <Head>
                <video autoPlay={true} loop={true} muted className="video">
                    <source src="/seoulvid1.mp4" type="video/mp4" />
                    Your browser does not support the video tag.
                </video>
                <Heading size={900} alignSelf="flex-start" marginTop={majorScale(3)}>
                    Blog
                </Heading>
                <UnorderedList alignSelf="flex-start" marginTop={majorScale(3)}>
                    {allPostsData.map(({ id, date, title }) => (
                        <ListItem key={id}>
                            <I18nLink href="/posts/[id]" as={`/posts/${id}`}>
                                <Link size={600}>{title}</Link>
                            </I18nLink>
                            <br />
                            <Text size={600} color="muted">
                                <Date dateString={date} />
                            </Text>
                        </ListItem>
                    ))}
                </UnorderedList>
            </Head>
        </Layout>
    );
};

export const getStaticProps: GetStaticProps = async () => {
    const allPostsData = getSortedPostsData();

    return {
        props: { allPostsData },
    };
};

export default Blog;
