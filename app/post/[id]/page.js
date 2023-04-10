export default function Post ({params}) {
    const {id} = params
    return(
        <h2>This is a post {id} </h2>
    )
}