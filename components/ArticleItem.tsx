import Link from 'next/link';
import articleStyles from '../styles/modules/Article.module.scss';
import { ArticleProps } from '../data';

const ArticleItem = ({ article }: ArticleProps) => {
  return (
    <Link href={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>
      </a>
    </Link>
  );
};

export default ArticleItem;
