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
        <p className="homePageParagraph removeMargin bold">
          Kindly RSVP by Sunday 7th July
        </p>
        <p className="homePageParagraph removeMargin">
          Please both reply to this invite and complete the form
        </p>
        <p className="homePageParagraph">to let us know your menu choices</p>
        <p className="smallParagraph removeMargin">
          For information on the gifts, venue and the order of the day
        </p>
        <p className="smallParagraph">
          please visit isabella-and-matthew.vercel.app
        </p>
      </section>
    </Layout>
  );
}
