import { Navbar } from './components/Navbar'
import './App.css'
import InputTodo from './components/InputTodo'
import EditTodo from './components/EditTodo'
import ListTodos from './components/ListTodos'

function App() {

  return (
    <main className='hero flex h-screen'>
      <Navbar/>
      <div className="flex flex-col w-full">
        <InputTodo/>
        <ListTodos/>
      </div>
    </main>
  )
}

export default App
