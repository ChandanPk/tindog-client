import { useParams } from "react-router";
import { API } from "../constants";
import useFetch from "../hooks/useFetch";
import { useHistory } from "react-router";

const BlogPage = () => {

    const { id } = useParams();
    const history = useHistory();
    const { data: blog, isPending, err } = useFetch(API.blogPage(id))


    //handle Delete 
    const handleDelete = () => {
        fetch(API.blogPage(id), {
            method: 'DELETE'
        })
            .then(res => res.json())
                .then(data => {
                    data.deleted && history.push('/')
                    })
                .catch(err => {
                    console.log(err.message)
                })
    }


    return (
        <div className="preview">
            {err && <p>{err}</p>}
            {isPending && <p className="loading">please wait..</p>}
            {blog && <div>
                <h2>{blog.title}</h2>
                <p>{blog.body}</p>
                <button onClick={()=> {handleDelete()}}>Delete</button>
            </div>}
        </div>
    );
}

export default BlogPage;