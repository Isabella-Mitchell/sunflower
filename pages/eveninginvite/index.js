import Head from "next/head";
import Layout from "../../components/layout";

export default function eveningInvites() {
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
          Invite you to celebrate their evening wedding reception on
        </p>
        <h2 className="removeMargin bold">Saturday 10th August 2024</h2>
        <p className="homePageParagraph bold">at 5 pm</p>
        <p className="homePageParagraph">The Barn at Berryfields, Meriden</p>
        <p className="homePageParagraph removeMargin bold">
          Kindly RSVP by Sunday 7th July
        </p>
        <p className="homePageParagraph removeMargin">
          Please email matthewlloyd250393@gmail.com
        </p>
        <p className="homePageParagraph">
          and let us know of any dietary requirements
        </p>
        <p className="smallParagraph removeMargin">
          For information on gifts, the venue and the order of the day
        </p>
        <p className="smallParagraph">
          please visit isabella-and-matthew.vercel.app
        </p>
      </section>
    </Layout>
  );
}
