import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "../services/axiosInstance.js";
import Loader from "./Loader";
// import PostList from "./PostList.jsx";

function PostDetails() {
  const { id } = useParams();
  const [post, setPost] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    axios
      .get(`/posts/${id}`)
      .then((response) => setPost(response.data))
      .catch(() => alert("Ma'lumotni yuklashda xatolik!"))
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return <Loader />;

  return (
    <div className="container">
      {post ? (
        <div className="post-details">
          <h2>{post.title}</h2>
          <p>{post.body}</p>
        </div>
      ) : (
        <p>Post topilmadi!</p>
      )}
    </div>
  );
}

export default PostDetails;
