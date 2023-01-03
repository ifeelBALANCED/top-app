// ** React Imports
import { ReactElement, ReactNode, useEffect, useState } from 'react'

// ** Next Import
import { useRouter } from 'next/router'
import { ErrorBoundary, ErrorBoundaryFallback } from '#/shared'

/**
 * Interface for window wrapper.
 *
 * @interface
 */
interface Props {
  fallback: ReactElement | null
  children: ReactNode
}

export const WindowWrapper = ({ children, fallback }: Props) => {
  // ** State
  const [windowReadyFlag, setWindowReadyFlag] = useState<boolean>(false)

  const router = useRouter()

  useEffect(
    () => {
      if (typeof window !== 'undefined') {
        setWindowReadyFlag(true)
      }
    },

    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router.route]
  )

  if (windowReadyFlag) {
    return <ErrorBoundary fallback={<ErrorBoundaryFallback />}>{children}</ErrorBoundary>
  } else {
    return fallback
  }
}
