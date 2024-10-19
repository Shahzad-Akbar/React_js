import React from 'react'
import { useTodo } from '../../../10Context-API-LS/src/contexts/TodoContext'

export function Todoform() {
    const [todo, setTodo] = useState("")
    const {addTodo} = useTodo()

    const add=(e)=>{
        e.preventDefault()

        addTodo({todo, completed:false})
        setTodo("")

    }

    return (
        <>
            
        </>
    )
}
