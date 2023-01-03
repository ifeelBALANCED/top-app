import { PropsWithChildren } from 'react'
import '#/styles/globals.css'

const RootLayout = ({ children }: PropsWithChildren) => {
  return (
    <html lang='en'>
      <head />
      <body>{children}</body>
    </html>
  )
}

export default RootLayout
