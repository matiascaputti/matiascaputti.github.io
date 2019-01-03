import Document, { Head, Main, NextScript } from "next/document";

class MyDocument extends Document {
  render() {
    return (
      <html lang="en">
        <Head>
          <meta name="description" content="Matias Caputti" />
          <meta name="viewport" content="width=device-width, initial-scale=1" />
          <meta property="og:url" content="https://matiascaputti.github.io" />
          <meta property="og:site_name" content="Matias Caputti" />
          <meta property="og:title" content="Matias Caputti" />
          <meta property="og:description" content="Personal Site" />

          <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Raleway:800|Ropa+Sans:400,400i" />
          <link rel="icon" type="image/png" href="/static/images/icon-192x192.png" />
        </Head>
        
        <body>
          <Main />
          <NextScript />
        </body>
      </html>
    );
  }
}

export default MyDocument;
