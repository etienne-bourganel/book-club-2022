import booksJSON from './data/booksdata.json'
import './App.css'
import AllBooks from './components/AllBooks'

function App() {
  const allBooksData = booksJSON.books
  return (
    <div>
      <div className='p-8 h-2/5'>
        <div className=' text-neutral-300 text-center text-6xl  font-GreatVibes'>
          Le Club de Lecture des Garçons Gentils
        </div>
        <div className='mt-2 italic text-teal-300 text-xl text-right font-GreatVibes'>
          2022 Edition
        </div>
      </div>
      <AllBooks allBooksData={allBooksData} />
    </div>
  )
}

export default App
