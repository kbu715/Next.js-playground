import {useRouter} from 'next/router'
import Link from 'next/link'
import { server } from '../../../config'
import Meta from '../../../components/Meta'
import { ArticleProps, IArticleType } from '../../../data'
import { GetStaticProps, GetStaticPaths } from 'next'


const article = ({article}: ArticleProps) => {

    // const router = useRouter()
    // const {id} = router.query

    return (
        <>
        <Meta title={article.title} description={article.excerpt} />
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </>
    )
}


export const getStaticProps: GetStaticProps = async (context) => {
    console.log('context', context);
    const res = await fetch(`${server}/api/articles/${context.params?.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}


// using api routes
// If you export an async function called getStaticPaths from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.
export const getStaticPaths: GetStaticPaths  = async () => {

    const res = await fetch(`${server}/api/articles`)
    const articles: IArticleType[] = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ( { params: { id: id.toString() } } ))

    return {
        paths,
        fallback: false // it means if we go to something that doesn't exist in the data its going to return 404 page
    }
}


//fallback: true --> if(router.isFallback){ return <div>로딩중...</div> }
//이런식으로 커스터마이징 할 수 있다.
//로딩이 끝나고 에러메시지가 뜬다.





/* Next.js will pre-render this page on each request using the data returned by getServerSideProps. */
/* export const getServerSideProps = async (context) => {

    // params: If this page uses a dynamic route, params contains the route parameters. If the page name is [id].js , then params will look like { id: ... }.
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
} */




/////////////////////////////////////////////////



// each time we're going to these pages, we're fetching the data right with getServerSideProps
// so we can also use a combination of getStaticProps and getStaticPaths to dynamically generate the paths with the data.
// and doing it this way is going to make it much faster. because it fetched at build time.


/* export const getStaticProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}


// If you export an async function called getStaticPaths from a page that uses dynamic routes, Next.js will statically pre-render all the paths specified by getStaticPaths.
export const getStaticPaths = async () => {

    const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
    const articles = await res.json()

    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ( { params: { id: id.toString() } } ))

    return {
        paths,
        fallback: false // it means if we go to something that doesn't exist in the data its going to return 404 page
    }
} */

export default article



// note getStaticPaths

/* return {
    paths: [
      { params: { id: '1' } },
      { params: { id: '2' } }
    ],
    fallback: ...
  } */