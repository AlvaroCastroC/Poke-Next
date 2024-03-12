import { Html, Head, Main, NextScript } from "next/document";

export default function Document() {
  return (
    <Html lang="pt-br">
      <Head>
        <meta name="description" content="Site desenvolvido por Álvaro de C. Cunha. Como um projeto pessoal" />
        <link rel="icon" href= "images/favicon.ico" />
      </Head>
      <body>
        <Main />
        <NextScript />
      </body>
    </Html>
  );
}
