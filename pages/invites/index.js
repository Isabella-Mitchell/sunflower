import Head from "next/head";
import Layout from "../../components/layout";

export default function invites() {
  return (
    <Layout showNav={false}>
      <Head>
        <title>Isabella and Matthew</title>
      </Head>
      <section>
        <p className="homePageParagraph">Together with their families</p>
        <h1 className="removeMargin">Isabella Mitchell</h1>
        <p className="text-center removeMargin increaseTopMargin">&</p>
        <h1 className="increaseBottomMargin">Matthew Lloyd</h1>
        <p className="homePageParagraph">
          Invite you to celebrate their wedding reception on
        </p>
        <h2 className="removeMargin bold">Saturday 10th August 2024</h2>
        <p className="homePageParagraph bold">at 1.30 pm</p>
        <p className="homePageParagraph">The Barn at Berryfields, Meriden</p>
        <p className="homePageParagraph removeMargin">
          Kindly RSVP by Monday 1st July
        </p>
        <p className="homePageParagraph removeMargin">
          Post: 42 Falkland Road, London, N8 0NX
        </p>
        <p className="homePageParagraph">Phone: 07975871891</p>
      </section>
    </Layout>
  );
}
