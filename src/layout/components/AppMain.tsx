import { useRef } from 'react'
import { useOutlet, useLocation } from 'react-router-dom'
import { SwitchTransition, CSSTransition } from 'react-transition-group'

const duration = 300

const AppMain = () => {
    const { pathname } = useLocation()
    const currentOutlet = useOutlet()
    const nodeRef = useRef(null)

    return (
        <SwitchTransition>
            <CSSTransition
                key={pathname}
                nodeRef={nodeRef}
                timeout={duration}
                classNames="page"
                unmountOnExit
            >
                {() => (
                    <section className="page" ref={nodeRef}>
                        {currentOutlet}
                    </section>
                )}
            </CSSTransition>
        </SwitchTransition>
    )
}

export default AppMain
