import { GetStaticProps } from "next";
import Head from "next/head";
import SubscribeButton from "../components/SubscribeButton";
import { stripe } from "../services/stripe";
import styles from "./home.module.scss";

interface Homeprops {
  product: {
    priceId: string;
    amount: number;
  };
}

export default function Home({ product }: Homeprops) {
  return (
    <>
      <Head>
        <title>Home | hq.news</title>
      </Head>
      <main className={styles.contentContainer}>
        <section className={styles.hero}>
          <span>👋 Hey, welcome</span>
          <h1>
            News about the <span>React</span> world.
          </h1>
          <p>
            Get access to all publications <br />
            <span>for {product.amount} / month</span>
          </p>
          <SubscribeButton priceId={product.priceId} />
        </section>

        <img src="/images/avatar.png" alt="Girl coding" />
      </main>
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  //buscando o preço do produto da api do stripe
  const price = await stripe.prices.retrieve("price_1Ks8HuEjUKhia15EuMwe2eUT", {
    //expand trás todas as informações do produto
    expand: ['product']
  });
 
  const product = {
    priceId: price.id,
    amount: new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD'
    }).format(price.unit_amount / 100),
  };
  return {
    props: {
      product,
    },
    revalidate: 60 * 60 * 24, //24h
  };
};
