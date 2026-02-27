const express = require("express");
const axios = require("axios");

const app = express();
const PORT = 5000;

app.use(express.json());

const BASE_URL = "https://jsonplaceholder.typicode.com/posts";


app.get("/api/posts", async (req, res) => {
    try {
        const response = await axios.get(BASE_URL);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to fetch posts" });
    }
});


app.get("/api/posts/:id", async (req, res) => {
    const { id } = req.params;

    try {
        const response = await axios.get(`${BASE_URL}/${id}`);
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(404).json({ error: "Post not found" });
    }
});

app.post("/api/posts", async (req, res) => {
    const { title, body, userId } = req.body;

    if (!title || !body || !userId) {
        return res.status(400).json({ error: "Title, body, and userId are required" });
    }

    try {
        const response = await axios.post(BASE_URL, { title, body, userId });
        res.status(201).json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(500).json({ error: "Failed to create post" });
    }
});

app.put("/api/posts/:id", async (req, res) => {
    const { id } = req.params;
    const { title, body, userId } = req.body;

    try {
        const response = await axios.put(`${BASE_URL}/${id}`, { title, body, userId });
        res.json(response.data);
    } catch (error) {
        console.error(error.message);
        res.status(404).json({ error: "Failed to update post" });
    }
});

app.delete("/api/posts/:id", async (req, res) => {
    const { id } = req.params;

    try {
        await axios.delete(`${BASE_URL}/${id}`);
        res.json({ message: `Post ${id} deleted successfully` });
    } catch (error) {
        console.error(error.message);
        res.status(404).json({ error: "Failed to delete post" });
    }
});

app.use((req, res) => {
    res.status(404).json({ error: "Route not found" });
});

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`);
});
