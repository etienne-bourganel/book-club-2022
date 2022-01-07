import Book from './Book'

const AllBooks = ({ allBooksData }) => {
  return (
    <div className='flex flex-col-reverse'>
      {allBooksData.map((bookData) => (
        <Book key={bookData.id} bookData={bookData} />
      ))}
    </div>
  )
}

export default AllBooks
