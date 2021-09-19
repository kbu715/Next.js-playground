import articleStyles from '../styles/modules/Article.module.scss';
import ArticleItem from './ArticleItem';
import { ArticlesProps } from '../data';

const ArticleList = ({ articles }: ArticlesProps) => {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} key={article.id} />
      ))}
    </div>
  );
};

export default ArticleList;
