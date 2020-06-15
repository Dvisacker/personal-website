import Head from "next/head";
import Layout from "@src/components/layout";
import Date from "@src/components/date";
import utilStyles from "@src/styles/utils.module.css";
import { getAllPostIds, getPostData } from "@src/lib/posts";
import { GetStaticProps, GetStaticPaths } from "next";

export const getStaticPaths: GetStaticPaths = async () => {
    const paths = getAllPostIds();
    return {
        paths,
        fallback: false,
    };
};

export const getStaticProps: GetStaticProps = async ({ params }) => {
    const postData = await getPostData(params.id as string);
    return {
        props: {
            postData,
        },
    };
};

export type PostProps = {
    postData: {
        title: string;
        date: string;
        contentHtml: string;
    };
};

export default function Post({ postData }: PostProps): JSX.Element {
    return (
        <Layout>
            <>
                <Head>
                    <title>{postData.title}</title>
                </Head>
                <article />
                <h1 className={utilStyles.headingXl}>{postData.title}</h1>
                <div className={utilStyles.lightText}>
                    <Date dateString={postData.date} />
                </div>
                <div dangerouslySetInnerHTML={{ __html: postData.contentHtml }} />
            </>
        </Layout>
    );
}
