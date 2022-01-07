const BookInfo = ({ title, author, year }) => {
  return (
    <div className='mb-2 '>
      <div className='font-normal text-xl'>{title}</div>
      <div className='text-neutral-300 italic'>{author}</div>
      <div className='text-neutral-300'>{year}</div>
    </div>
  )
}

export default BookInfo
