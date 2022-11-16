import articleStyles from '../styles/Article.module.css'

function ArticleList({articles}) {
  return (
    <div className={articleStyles.grid}>
        {articles.map(article => <h4 key={article.id}>{article.title}</h4>)}
    </div>
  )
}

export default ArticleList