import selectCover from '../modules/selectCover'

const Cover = ({ bookID, goodreadsURL }) => {
  return (
    <div className='w-32 flex align-middle items-center justify-center flex-shrink-0'>
      <a href={goodreadsURL} target='_blank'>
        <img className='h-40 p-2' src={selectCover(bookID)}></img>
      </a>
    </div>
  )
}

export default Cover
