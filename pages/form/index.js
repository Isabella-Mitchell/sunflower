import Head from "next/head";
import Layout from "../../components/layout";

export default function form() {
  return (
    <Layout showNav={false}>
      <Head>
        <title>Isabella and Matthew</title>
      </Head>
      <section>
        <iframe
          src="https://docs.google.com/forms/d/e/1FAIpQLScsYzg5MgymwykIfqkaIH6uIgGjTIdBRS76No-TNGJTSdDF2A/viewform?embedded=true"
          width="640"
          height="1372"
          frameborder="0"
          marginheight="0"
          marginwidth="0"
          className="center"
        >
          Loading…
        </iframe>
      </section>
    </Layout>
  );
}
