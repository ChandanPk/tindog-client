import { useForm } from "react-hook-form";
// import handlePost from '../hooks/post';
import { API } from "../constants";
import { useHistory } from "react-router";

const AddBlog = () => {
  const { register, handleSubmit } = useForm();
  const history = useHistory();

  const onSubmit = (data) => {
    const { title, author, body } = data;
    const id = Math.random();

    console.log(title, author, body);
    fetch(API.blogs, {
      method: "POST",
      body: JSON.stringify({ title, author, body, id }),
      headers: { "Content-type": "application/json" },
    })
      .then((res) => res.json())
      .then((data) => {
        data.success && history.push("/");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div>
      <form onSubmit={handleSubmit(onSubmit)} className="form">
        <div className="add-blog-header">Add blog</div>
        <input
          className="title-field field"
          type="text"
          placeholder="title"
          {...register("title", { required: true })}
        />
        <input
          className="author-field field"
          type="text"
          placeholder="author"
          {...register("author", { required: true })}
        />
        <textarea
          className="body-field field"
          type="text"
          placeholder="body"
          {...register("body", { required: true })}
        />
        <button className="btn">Submit</button>
      </form>
    </div>
  );
};

export default AddBlog;
