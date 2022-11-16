import Styles from '../styles/Layout.module.css'
import Nav from './Nav'
import Header from './Header'

function Layout({children}) {
  return (
    <>
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