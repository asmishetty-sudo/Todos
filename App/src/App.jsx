import { useState } from 'react'
import Navbar from './assets/Components/Navbar'
import Todo from './assets/Components/Todo'

function App() {
  const [todo, setTodo] = useState("")
  const [todos, setTodos] = useState([])
  const [comp, setComp] = useState(false)

  const handleTodo = (e) => {
    setTodo(e.target.value)
  }
  const handleAdd = () => {
    if (!todo) return;
    setTodos([...todos, { todo, isCompleted: false }])
    setTodo("")
  }
  const handleCheck = (e) => {
    let dummy = [...todos];
    dummy[e].isCompleted = !dummy[e].isCompleted;
    setTodos(dummy)
  }
  const handleEdit = (id) => {
    setTodo(todos[id].todo)
    handleDelete(id)
  }
  const handleDelete = (id) => {
    let dummy = todos.filter((todo, index) => index != id);
    setTodos(dummy)
  }
  const setFinish = () => {
    setComp(!comp)
  }
  return (
    <>
      <Navbar />
      <div className="todobar shadow-[3px_3px_11px_4px_#deb16f] min-h-[80vh] flex flex-col gap-2 sm:w-lg w-md bg-amber-200 rounded-2xl mx-auto my-2.5 p-2.5 pb-7">
        <div className="todo text-center text-xl font-bold text-amber-800">Todos List</div>
        <hr className=' text-amber-600' />
        <div className="input flex gap-3 justify-center my-3.5">
          <input type="text" placeholder='Enter your todo' onChange={handleTodo} value={todo} className='border border-amber-800 text-amber-900 rounded-xs bg-amber-700/20 hover:bg-amber-700/55 w-[60%] cursor-pointer' />
          <button onClick={handleAdd} className='bg-amber-900 hover:bg-amber-950 text-amber-200 cursor-pointer p-1 px-2.5 rounded-lg'>Add Todo</button>
        </div>
        <div className='flex gap-2 justify-start ml-11'>
          <input type="checkbox" onChange={setFinish} name="showCompleted" checked={comp} className=' bg-amber-800' />
          <p className=' text-amber-900'>Show Completed</p>

        </div>
        <div className="todoList bg-amber-800/10 w-[90%] mx-auto my-5 min-h-96 p-1 rounded-2xl">
          {todos.map((to, index) => {
            return (comp || !to.isCompleted) && <Todo key={index} i={index} todo={to.todo} onCheck={() => handleCheck(index)} onEdit={() => handleEdit(index)} onDelete={() => handleDelete(index)} complete={to.isCompleted} />
          })}

        </div>
      </div>

    </>
  )
}



export default App
