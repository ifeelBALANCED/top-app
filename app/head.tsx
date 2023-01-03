'use client'

import { DefaultTags } from '#/shared'

const Head = () => {
  return (
    <>
      <DefaultTags />
      <title>Top App</title>
      <meta
        name='description'
        content='A playground to explore new Next.js 13 app directory features such as nested layouts, instant loading states, streaming, and component level data fetching.'
      />
    </>
  )
}

export default Head
