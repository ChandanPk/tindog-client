import Bloglist from "./Bloglist";
import useFetch from "../hooks/useFetch";
import { API } from "../constants";

export default function Home() {

    const { isPending, data: blogs, err, setData } = useFetch(API.blogs);

    const handleDelete = id => {
        const filteredBlogs = blogs.filter(item => item.id !== id)
        setData(filteredBlogs)
    }


    return (
        <div className="home">
            {err && <p className="loading">{err}</p>}
            {isPending && <p className="loading">Loding...</p>}
            {blogs && <Bloglist blogs={blogs} handleDelete={handleDelete} />}
        </div>
    );
}