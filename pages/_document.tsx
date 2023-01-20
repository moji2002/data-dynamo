import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html>
        <Head />
        <body className="loading  bg-base-200" data-theme="light">
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument
