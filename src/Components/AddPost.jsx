import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import axios from "../services/axiosInstance.js";
import '../index.css';

function AddPost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const navigate = useNavigate();

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!title || !body) {
            alert("Iltimos, barcha maydonlarni toldiring!");
            return;
        }

        axios.post("/posts", { title, body })
            .then(() => {
                alert("Post muvaffaqiyatli qoshildi!");
                navigate("/");
            })
            .catch(() => alert("Xatolik yuz berdi!"));
    };

    return (
        <div className="container2">
            <h2>Yangi Post Qoshish</h2>
            <form onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Sarlavha"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                />
                <textarea
                    placeholder="Post matni..."
                    value={body}
                    onChange={(e) => setBody(e.target.value)}
                ></textarea>
                <button type="submit">Qoshish</button>
            </form>
        </div>
    );
}

export default AddPost;
