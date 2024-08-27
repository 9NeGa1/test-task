import React from 'react'
import Container from '../components/container'
import { Link, useParams } from 'react-router-dom'
import { useAppSelector } from '../app/hooks'
import { selectFetchPhotos } from '../store/fetchPhotos/selectors'
import { ArrowLeft } from 'lucide-react'

const ItemPage = () => {
    const { id } = useParams()
    const { AllPhotos } = useAppSelector(selectFetchPhotos)
    const findItem = AllPhotos.find(photo => photo.id === Number(id))
  return (
    <Container>
    <div className='flex flex-col gap-5 pt-5'>
    <Link to='/'>
      <div className='flex items-center'>    
      <ArrowLeft />
      <span className='font-semibold'>Назад</span>  
      </div>
      </Link>
      <img src={findItem?.thumbnailUrl} alt={findItem?.title} className='w-[150px] h-[150px]' />
      <p className='font-semibold text-[20px]'>{findItem?.title}</p>
    </div>
    </Container>
  )
}

export default ItemPage
