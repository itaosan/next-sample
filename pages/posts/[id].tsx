import { GetStaticPaths,GetStaticProps,NextPage } from "next";
import Head from "next/head";
import { useRouter } from "next/router";
import { ParsedUrlQuery } from "querystring";

type PostProps = {
    id : string
}

const Post : NextPage<PostProps> = (props) => {
    const {id} = props
    const router = useRouter()

    if ( router.isFallback){
        return <div>Loading...</div>
    }

    return (
        <div>
            <Head>
                <title>Next Appn</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このぺーじは静的サイトでビルド時に生成された
                </p>
                <p>{`/posts/${id}に対応するページ`}</p>
            </main>
        </div>
    )
}

export const getStaticPaths: GetStaticPaths = async() => {
    const paths = [
        {
            params : {
                id : '1',
            },
        },
        {
            params : {
                id : '2',
            },
        },
        {
            params : {
                id : '3',
            },
        },
    ]

    return {paths,fallback: true}
}

interface PostParams extends ParsedUrlQuery{
    id :string
}

export const getStaticProps: GetStaticProps<PostProps,PostParams> = async (context) => {
    return {
        props: {
            id: context.params!['id'],
        },
    }
}

export default Post

