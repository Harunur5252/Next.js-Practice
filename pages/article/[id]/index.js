import Link from "next/link"
import { useRouter } from "next/router"


function article({article}) {
    // const router = useRouter()
    // const {id} = router.query

  return (
    <>
        <h3>{article.title}</h3>
        <p>{article.body}</p>
        <br />
        <Link href='/'>Go Back</Link>
    </>
  )
}

export default article

export const getServerSideProps = async (context) => {
    const res = await fetch(`https://jsonplaceholder.typicode.com/posts/${context.params.id}`)
    const article = await res.json()
    return {
        props : {
            article
        }
    }
}