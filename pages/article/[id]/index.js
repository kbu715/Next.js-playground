import {useRouter} from 'next/router'
import Link from 'next/link'
const article = ({article}) => {

    // const router = useRouter()
    // const {id} = router.query

    return (
        <p>
            <h1>{article.title}</h1>
            <p>{article.body}</p>
            <br />
            <Link href="/">Go Back</Link>
        </p>
    )
}

/* Next.js will pre-render this page on each request using the data returned by getServerSideProps. */
export const getServerSideProps = async (context) => {

    // params: If this page uses a dynamic route, params contains the route parameters. If the page name is [id].js , then params will look like { id: ... }.
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()

    return {
        props: {
            article
        }
    }
}

export default article
