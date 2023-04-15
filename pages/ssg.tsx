import { GetStaticProps ,NextPage,NextPageContext } from "next";
import Head from "next/head";

type SSGProps ={
    message: string
}

const SSG: NextPage<SSGProps> = (props) => {
    const {message} = props
    return (
        <div>
            <Head>
                <title>Static Site Generatrion</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>
            <main>
                <p>
                    このぺーじは静的サイト
                </p>
                <p>{message}</p>
            </main>
        </div>
    )
}

export const getStaticProps : GetStaticProps<SSGProps> = async (context) =>{
    const timestamp = new Date().toLocaleString()
    const message = `${timestamp} に　getStaicPropsが実行されました`
    console.log(message)
    return {
        props: {
            message,
        },
    }
}

export default SSG