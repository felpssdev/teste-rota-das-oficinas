import { useState } from 'react'
import './App.css'
import FirstTask from './components/tasks/FirstTask'
import Header from './components/Header'
import SecondTask from './components/tasks/SecondTask'
import ThirdTask from './components/tasks/ThirdTask/ThirdTask'

function App() {
  const [currentTask, setCurrentTask] = useState(1)

  const nextTask = () => {
    setCurrentTask(currentTask + 1);
  };

  const previousTask = () => {
    setCurrentTask(currentTask - 1);
  };

  return (
    <>
      <Header />
      <main className='grid justify-items-center text-white mt-2'>
        <h1 className='text-black text-xl'>{`TAREFA ${currentTask}`}</h1>
        <div
          className='flex gap-2 mb-2'
          >
          <button
            className='h-6 w-6 bg-green-600 rounded-full disabled:bg-red-500'
            disabled={currentTask <= 1}
            onClick={ previousTask }
          >
          { '<' }
          </button>
          <button
            className='h-6 w-6 bg-green-600 rounded-full disabled:bg-red-500'
            disabled={currentTask >= 3}
            onClick={ nextTask }
          >
          { '>' }
          </button>
        </div>

        {currentTask === 1 && <FirstTask />}
        {currentTask === 2 && <SecondTask />}
        {currentTask === 3 && <ThirdTask />}
      </main>
    </>
  )
}

export default App
