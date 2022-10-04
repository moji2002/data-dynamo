import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html data-theme="stimma">
        <Head />
        <body className="loading font-serif capitalize tracking-wider text-base-content">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
