import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

function ArticleItems({article}) {
  return (
    <Link href={`/article/${article.id}`} legacyBehavior>
        <a className={articleStyles.card}>
            <h3>
                {article.title} 
            </h3>
            <p>
                {article.excerpt}
            </p>
        </a> 
    </Link>
  )
}

export default ArticleItems