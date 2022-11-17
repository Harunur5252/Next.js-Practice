import Link from 'next/link'
import articleStyles from '../styles/Article.module.css'

function ArticleItems({article}) {
  return (
<<<<<<< HEAD
    <Link href={`/article/${article.id}`} legacyBehavior>
        <a className={articleStyles.card}>
=======
    <Link href='/article/[]' as={`/article/${article.id}`}>
        <div className={articleStyles.card}>
>>>>>>> 2ae735f4c19f908184f3cb6acb7c0cc0dc5a1e15
            <h3>
                {article.title} 
            </h3>
            <p>
<<<<<<< HEAD
                {article.excerpt}
            </p>
        </a>
=======
                {article.body}
            </p>
        </div>
>>>>>>> 2ae735f4c19f908184f3cb6acb7c0cc0dc5a1e15
    </Link>
  )
}

export default ArticleItems