import Document, {
  Html,
  Head,
  Main,
  NextScript,
  DocumentContext,
} from "next/document";
import { Box, ColorModeScript } from "@chakra-ui/react";
import { fullName, shortDescription, siteUrl } from "../constants";
import theme from "../theme";
import config from "../constants/config";

class MyDocument extends Document {
  static async getInitialProps(ctx: DocumentContext) {
    const initialProps = await Document.getInitialProps(ctx);
    return initialProps;
  }

  render() {
    return (
      <Html lang="en">
        <Head>
          <link rel="icon" href="/favicon.ico" />
          <link
            rel="apple-touch-icon"
            sizes="180x180"
            href="/apple-touch-icon.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="32x32"
            href="/favicon-32x32.png"
          />
          <link
            rel="icon"
            type="image/png"
            sizes="16x16"
            href="/favicon-16x16.png"
          />
          <link rel="manifest" href="/site.webmanifest" />

          <meta charSet="utf-8" />
          <meta name="robots" content="follow, index" />
          <meta httpEquiv="x-ua-compatible" content="ie=edge" />
          <meta name="description" content={shortDescription} />
          <link rel="canonical" href={siteUrl} />

          <meta property="og:url" content={siteUrl} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={fullName} />
          <meta property="og:description" content={shortDescription} />

          <meta name="twitter:card" content="summary" />
          <meta name="twitter:url" content={siteUrl} />
          <meta name="twitter:title" content={fullName} />
          <meta name="twitter:description" content={shortDescription} />
          {config.gaTrackingId && (
            <>
              <script
                async
                src={`https://www.googletagmanager.com/gtag/js?id=${config.gaTrackingId}`}
              />
              <script
                type="text/javascript"
                dangerouslySetInnerHTML={{
                  __html: `window.dataLayer = window.dataLayer || [];function gtag(){dataLayer.push(arguments);}gtag('js', new Date());gtag('config', '${config.gaTrackingId}');`,
                }}
              />
            </>
          )}
        </Head>
        <Box as="body">
          <ColorModeScript initialColorMode={theme.config.initialColorMode} />
          <Main />
          <NextScript />
        </Box>
      </Html>
    );
  }
}

export default MyDocument;
