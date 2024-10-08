const express = require("express");
const app = express();
const cors = require("cors");
const pool = require("./db");

//middleware
app.use(cors());
app.use(express.json()); //req.body

//ROUTES//

//create a todo

app.post("/todos", async(req,res) => {
    try {
        
        const { description } = req.body;
        const newTodo = await pool.query("INSERT INTO todo (description) VALUES($1) RETURNING *", [description]);

        res.json(newTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
})

//get all todo 

app.get("/todos", async (req, res) => {
    try {
        const allTodos =  await pool.query("SELECT * FROM todo");
        res.json(allTodos.rows);
    } catch (err) {
        console.error(err.message);
    }
});

//get a todo

app.get("/todos/:id", async (req,res) => {
    try {
        const { id } = req.params;
        const aTodo =  await pool.query("SELECT * FROM todo WHERE todo_id = $1", [id]);

        res.json(aTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//update a todo

app.put("/todos/:id", async(req,res)=>{
    try {
        const { id } = req.params;
        const { description } = req.body;
        const setTodo = await pool.query("UPDATE todo SET description = $1 WHERE todo_id = $2", [description, id]);

        res.json(setTodo.rows[0]);
    } catch (err) {
        console.error(err.message);
    }
});

//delete a todo

app.delete("/todos/:id", async(req,res)=>{
    try {
        const { id } = req.params;
        const deleteTodo = await pool.query("DELETE FROM todo WHERE todo_id = $1", [id]);

        res.json("Todo successfully deleted!");
    } catch (err) {
        console.error(err.message);
    }
});


app.listen(5000, ()=>{
    console.log("Server is running on port 5000");
});