import Styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'
import Meta from './Meta'

function Layout({children}) {
  return (
    <>
        <Meta />
        <Nav />
        <div className={Styles.container}>
            <main className={Styles.main}>
                <Header />
                {children}
            </main>
        </div>
    </>
  )
}

export default Layout