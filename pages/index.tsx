import ArticleList from '../components/ArticleList';
import { server } from '../config/index';
import { ArticlesProps, IArticleType } from '../data';
import { GetStaticProps } from 'next';

export default function Home({ articles }: ArticlesProps) {
  return (
    <>
      <ArticleList articles={articles} />
    </>
  );
}

export const getStaticProps: GetStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles: IArticleType[] = await res.json();

  return {
    props: {
      articles,
    },
  };
};

/* Next.js will pre-render this page at build time using the props returned by getStaticProps. */
// export const getStaticProps = async () => {

//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts?_limit=6`);
//     const articles = await res.json();

//     return {
//       props: {
//         articles
//       }
//     }
// }
