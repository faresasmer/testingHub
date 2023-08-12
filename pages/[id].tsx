import { useRouter } from "next/router"
export default function Person() {
    const router = useRouter();
    return (
        <>

        <h1> id {router.query.id}</h1>
        </>
    )
}