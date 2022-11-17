import Link from "next/link"
import { useRouter } from "next/router"
<<<<<<< HEAD
import Meta from "../../../components/meta"
import {server} from '../../../config'
=======

>>>>>>> 2ae735f4c19f908184f3cb6acb7c0cc0dc5a1e15

function article({article}) {
    // const router = useRouter()
    // const {id} = router.query

  return (
    <>
<<<<<<< HEAD
        <Meta title={article.title} description={article.excerpt} />
=======
>>>>>>> 2ae735f4c19f908184f3cb6acb7c0cc0dc5a1e15
        <h3>{article.title}</h3>
        <p>{article.body}</p>
        <br />
        <Link href='/'>Go Back</Link>
    </>
  )
}

export default article

<<<<<<< HEAD

export const getStaticProps = async (context) => {
    const res = await fetch(`${server}/api/articles/${context.params.id}`)
=======
export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
>>>>>>> 2ae735f4c19f908184f3cb6acb7c0cc0dc5a1e15
    const article = await res.json()
    return {
        props : {
            article
        }
    }
<<<<<<< HEAD
}

export const getStaticPaths = async () => {
    const res = await fetch(`${server}/api/articles`)
    const articles = await res.json()
    const ids = articles.map(article => article.id)
    const paths = ids.map(id => ({params:{id:id.toString()}}))
    return {
        paths,
        fallback:false
    }
}


// export const getStaticProps = async (context) => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
//     const article = await res.json()
//     return {
//         props : {
//             article
//         }
//     }
// }

// export const getStaticPaths = async () => {
//     const res = await fetch(`https://jsonplaceholder.typicode.com/posts`)
//     const articles = await res.json()
//     const ids = articles.map(article => article.id)
//     const paths = ids.map(id => ({params:{id:id.toString()}}))
//     return {
//         paths,
//         fallback:false
//     }
// }
=======
}
>>>>>>> 2ae735f4c19f908184f3cb6acb7c0cc0dc5a1e15
