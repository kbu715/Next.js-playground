
import articleStyles from '../styles/Article.module.css'
import ArticleItem from './ArticleItem'
import { ArticlesProps } from '../data'

const ArticleList = ({articles}: ArticlesProps) => {
    return (
        <div className={articleStyles.grid}>
            {articles.map(article => (
                <ArticleItem article={article} key={article.id} />
            ))}
        </div>
    )
}

export default ArticleList
