const BookNumber = ({ bookID }) => {
  return (
    <div className='justify-self-end'>
      <div className='w-20 mr-0 text-5xl items-center justify-center flex text-teal-500 font-MontSerrat font-thin'>
        {bookID}
      </div>
    </div>
  )
}

export default BookNumber
