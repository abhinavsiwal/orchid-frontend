import Head from "next/head";

const SEO = ({ title, description, canonicalUrl }: any) => {
  return (
    <Head>
      <title>{title}</title>
      <meta name="description" content={description} />
      {canonicalUrl && <link rel="canonical" href={canonicalUrl} />}
      {/* Other SEO tags */}
    </Head>
  );
};

export default SEO;
