import { createSlice, nanoid } from "@reduxjs/toolkit";
// import Todos from "../../components/Todos";

const initialState = {
    todos:[{
        id: 1,
        text: "Hello World"
    }]
}

export const todoSlice = createSlice({
    name: 'todo',
    initialState,
    reducers: {
        addTodo: (state, action) =>{
            const todo = {
                id: nanoid(),
                text: action.payload 
            }
            state.todos.push(todo)
        },
        removeTodo: (state, action) => {
            state.todos = state.todos.filter((todo) => todo.id !== action.payload)
        },
        // We destructure id and text from action.payload.
        // We find the todo item with the corresponding ID using find.
        // If the todo item exists, we update its text property with the new text provided.
        updateTodo: (state, action) => {
            const { id, text } = action.payload;
            const todo = state.todos.find(todo => todo.id === id);
            if (todo) {
                todo.text = text;
            }
        }
    }
})

export const {addTodo, removeTodo} = todoSlice.actions

export default todoSlice.reducer