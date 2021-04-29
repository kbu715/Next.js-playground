import ArticleList from '../components/ArticleList'
import { server } from '../config/index'
import { ArticlesProps, IArticleType } from '../data'
import { GetStaticProps } from 'next'
import { useContext } from 'react';
import ClickContext from '../context/click';

export default function Home({articles}: ArticlesProps) {
  // console.log(articles)

  const [clickAmount, increment] = useContext(ClickContext);

  return (
    <>
    <ArticleList articles={articles}/>
    You clicked the button <strong>{clickAmount}</strong> times.
    <em>This page is landing.</em>
      <button onClick={increment}>
        Click me!
      </button>
    </>
  )
}

export const getStaticProps: GetStaticProps = async () => {

  const res = await fetch(`${server}/api/articles`);
  const articles: IArticleType[] = await res.json();

  return {
    props: {
      articles
    }
  }
}


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