import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

function ArticleItems({article}) {
  return (
    <Link href='/article/[]' as={`/article/${article.id}`}>
        <div className={articleStyles.card}>
            <h3>
                {article.title} 
            </h3>
            <p>
                {article.body}
            </p>
        </div>
    </Link>
  )
}

export default ArticleItems