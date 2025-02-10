import React, { useEffect, useState } from 'react';
import { useNavigate } from "react-router-dom";
import axios from "../services/axiosInstance.js";
import Loader from "./Loader";

function PostList() {
    const [posts, setPosts] = useState([]);
    const [loading, setLoading] = useState(true);
    const navigate = useNavigate();

    useEffect(() => {
        axios
            .get("/posts")
            .then((response) => {
                setPosts(response.data);
            })
            .catch((error) => {
                console.error("Malumotlarni yuklashda xatolik:", error);
                alert("Malumotlarni yuklashda xatolik!");
            })
            .finally(() => {
                setLoading(false);
            });
    }, []);

    const deletePost = (id) => {
        if (window.confirm("Siz rostan ham ochirmoqchimisiz?")) {
            axios
                .delete(`/posts/${id}`)
                .then(() => {
                    setPosts(posts.filter((post) => post.id !== id));
                    alert("post muvaffaqiyatli ochirildi!");
                })
                .catch(() => {
                    alert("postni ochirishda xatolik yuz berdi!");
                });
        }
    };

    if (loading) return <Loader />;

    return (
        <div className='container'>
            {posts.length > 0 && posts.map((post, index) => (
                <div className='card' key={index}>
                    <h3>{post.title}</h3>
                    <p>{post.body}</p>
                    <button className='delete-btn' onClick={() => deletePost(post.id)}>O‘chirish</button>
                    <button className="details-btn" onClick={() => navigate(`/posts/${post.id}`)}>
                        Batafsil
                    </button>
                </div>
            ))}
        </div>
    );
}

export default PostList;
