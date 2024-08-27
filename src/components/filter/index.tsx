import { FilterIcon, FilterX } from 'lucide-react'
import React from 'react'
import { toggleLikeMode } from '../../store/fetchPhotos/fetchPhotos'
import { useAppDispatch } from '../../app/hooks'

const Filter = () => {
    const dispatch = useAppDispatch()
    const [liked, setLiked] = React.useState(false)
    const handleClick = () => {
      dispatch(toggleLikeMode())
      setLiked(!liked)
    }
  return (
    <div onClick={handleClick} className='mb-5 flex gap-2 cursor-pointer'>
      {
        liked ?
        <FilterX/>
        :
        <FilterIcon/>
      }
      
      <span className="font-medium text-gray-500 text-lg">
        {liked ? 'Понравившиеся' : 'Все'}
    </span>
    </div>
  )
}

export default Filter
