import type { ComponentType } from 'react'
import React, { Suspense } from 'react'

import Loading from './Loading'

interface Props {
    loader(): Promise<{ default: ComponentType<unknown> }>
    loading?: ComponentType
}

const Loadable = ({ loader, loading }: Props) => {
    const LazyComponent = React.lazy(loader)

    const Load = loading || Loading

    const InnerComponent = () => {
        return (
            <Suspense fallback={<Load />}>
                <LazyComponent />
            </Suspense>
        )
    }

    return React.memo(InnerComponent)
}

export default Loadable
