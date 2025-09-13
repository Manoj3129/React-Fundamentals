function BlogPlot(post){

    return (
        <div>
        <p>Author: {post.author}</p>
        <p>Title: {post.title}</p>
        <p>Content: {post.content}</p>
        </div>
    )
}
export default BlogPlot;