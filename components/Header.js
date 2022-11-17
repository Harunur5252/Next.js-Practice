import headerStyles from '../styles/Header.module.css'

function Header() {
  return (
    <div>
        <h1 className={headerStyles.title}>
            <span>web dev</span> news
        </h1>
        <p className={headerStyles.description}>Keep up to date the latest with web dev</p>
    </div>
  )
}

export default Header