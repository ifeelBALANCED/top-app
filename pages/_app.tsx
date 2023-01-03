// imports
import type { AppProps } from 'next/app'
import { WindowWrapper } from '#/app/containers'
import { Spinner } from '#/shared'

const Application = ({ Component, pageProps }: AppProps) => {
  return (
    <WindowWrapper fallback={<Spinner />}>
      <Component {...pageProps} />
    </WindowWrapper>
  )
}
export default Application
