import Head from 'next/head'
import styles from './styles.module.scss'

export default function Posts() {
    return (
        <>
            <Head>
                <title>Posts | hqnews</title>
            </Head>
            <main className={styles.cotainer}>
                <div className={styles.postList}>
                    <a href="">
                        <time>12 de março de 2022</time>
                        <strong>Título do Post</strong>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita iure ipsum alias a? In et officiis, ipsa </p>
                    </a>

                    <a href="">
                        <time>12 de março de 2022</time>
                        <strong>Título do Post</strong>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita iure ipsum alias a? In et officiis, ipsa </p>
                    </a>

                    <a href="">
                        <time>12 de março de 2022</time>
                        <strong>Título do Post</strong>
                        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Expedita iure ipsum alias a? In et officiis, ipsa </p>
                    </a>
                </div>
            </main>
        </>
    )
}