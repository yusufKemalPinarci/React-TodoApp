import React, { useEffect, useRef, useState } from 'react'
import { FaClipboardList } from "react-icons/fa";
import { CiCirclePlus } from "react-icons/ci";
import TodoItem from './TodoItem';


const Todo = () => {

    const [todos, setTodos] = useState(localStorage.getItem("todos") ? 
    JSON.parse(localStorage.getItem("todos")) : [] );

    const data = useRef();

    const addTodos = () => {
        const inputText = data.current.value.trim();

        if (inputText === "") {
            return null;
        }

        const newTodo = {
            id: todos.length + 1,
            text: inputText,
            isComplete: false,
        };

        setTodos((prev) => [...prev, newTodo]);

        data.current.value = "";
    };

    const deleteTodo = (id)=>{
        setTodos((prevTodos) => { 
           return prevTodos.filter((todo) => todo.id != id)
        } )

    };

    const toggle = (id)=>{
        setTodos((prevTodos) => {
            return prevTodos.map((todo)=>{
                if (todo.id === id){
                    return {...todo, isComplete: !todo.isComplete}
                }
                return todo;


            })
        })
    };

useEffect(()=>{
    localStorage.setItem("todos", JSON.stringify(todos));
},[todos]);

    return (
        <div className='place-self-center bg-white w-[450px] h-[600px] p-16 flex flex-col gap-6 rounded-lg'>

            {/* Başlık Kısmı */}
            <h1 className='text-3xl font-semibold tracking-wider
         flex gap-3 items-center '> <FaClipboardList />Todo App</h1>

            {/* Arama kısmı */}
            <div className='flex bg-[#EEEEEE]  items-center rounded-full'>
                <input ref={data} type="text" className='border-none bg-transparent p-3.5 flex-1 outline-none placeholder:text-slate-400'
                    placeholder="yeni bir görev gir" />
                <div className='bg-[#00ADB5] h-full  w-14 flex items-center 
                justify-center rounded-r-full' onClick={() => addTodos()}>
                    <CiCirclePlus className='size-9 text-[#EEEEEE] ' />
                </div>
            </div>

            {/* Listelenecek Itemler */}
            <div className='mt-5'>
                {todos.map((todo) => (
                    <TodoItem key= {todo.id} todo={todo} toggle={toggle}  deleteTodo = {deleteTodo}></TodoItem>

                ))}

            </div>


        </div>

    )
}

export default Todo