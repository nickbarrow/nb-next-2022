import SimpleReactLightbox from 'simple-react-lightbox'
import '../scss/globals.scss'

function MyApp({ Component, pageProps }) {
  return (
    <SimpleReactLightbox>
      <Component {...pageProps} />
    </SimpleReactLightbox>
  )
}

export default MyApp
