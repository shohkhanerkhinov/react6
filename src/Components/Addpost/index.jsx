import React, { useState } from "react";
import axios from 'axios';

function Addpost() {
    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");
    const [loading, setLoading] = useState(false);

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        try {
            const response = await axios.post("https://jsonplaceholder.typicode.com/posts", {
                title,
                body,
            });

            if (response.status === 201) {
                console.log("Post muvaffaqiyatli qo'shildi!");
                setTitle("");
                setBody("");
            } else {
                console.log("Failed to add post:", response.status);
            }
        } catch (error) {
            console.log("Post qo'shishda xatolik yuz berdi:", error.message); 
        } finally {
            setLoading(false);
        }
    };

    return (
        <div className="add-post">
            <h1>Yangi Post Qo'shish</h1>
            <form onSubmit={handleSubmit}>
                <div>
                    <input
                        type="text"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        placeholder="Post title"
                    />
                </div>
                <div>
                    <textarea
                        value={body}
                        onChange={(e) => setBody(e.target.value)}
                        placeholder="Post content"
                    ></textarea>
                </div>
                <button type="submit" disabled={loading}>
                    {loading ? "Yuborilmoqda..." : "Qo'shish"}
                </button>
            </form>
        </div>
    );
}

export default Addpost;
    