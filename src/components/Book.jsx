import BookNumber from './BookNumber'
import Cover from './Cover'
import BookInfo from './BookInfo'
import Grades from './Grades'

const Book = ({ bookData }) => {
  return (
    <div className='h-48 mt-2 flex items-center justify-center'>
      <div className='w-11/12 flex items-center'>
        <Cover bookID={bookData.id} goodreadsURL={bookData.goodreadsURL} />
        <div className=' basis-3/5 text-neutral-300 font-Montserrat font-thin'>
          <BookInfo
            title={bookData.title}
            author={bookData.author}
            year={bookData.year}
          />
          <Grades
            antonGrade={bookData.antonGrade}
            willeGrade={bookData.willeGrade}
            etienneGrade={bookData.etienneGrade}
          />
        </div>
        <BookNumber bookID={bookData.id} />
      </div>
    </div>
  )
}

export default Book
