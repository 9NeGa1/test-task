import React, { useEffect, useState } from 'react'
import CardItem, { MiniPhoto } from '../card-item'
import axios from 'axios'
import { useAppDispatch, useAppSelector } from '../../app/hooks';
import { useGetPhotosQuery } from '../../store/api';
import Skeleton from '../skeleton';
import { addAllPhotos } from '../../store/fetchPhotos/fetchPhotos';

export interface Photo {
  albumId: number;
  id: number;
  thumbnailUrl: string;
  title: string;
  url: string;
}
const CardList = () => {
  const dispatch = useAppDispatch()

  const {data, isLoading} = useGetPhotosQuery({})

  const {likedPhotos, likeMode, AllPhotos} = useAppSelector(state => state.fetchPhotos)
 
  
  useEffect( () => {
    if(data) {
      dispatch(addAllPhotos(data))
    }
  }, [isLoading])

  if(isLoading) {
    return (
      <div className='grid grid-cols-3 gap-3'>
      {[...Array(9)].map((_, index) => <Skeleton key={index}/>)}
      </div>
    )
  }

  return (
    <div className='grid grid-cols-3 gap-3'>
      {
        likeMode ?
        likedPhotos.map((item: MiniPhoto) => <CardItem key={item.id} id={item.id}  title={item.title} thumbnailUrl={item.thumbnailUrl}/>)
        :
        AllPhotos.map((item: Photo) => <CardItem key={item.id} id={item.id}  title={item.title} thumbnailUrl={item.thumbnailUrl}/>)
      }
    </div>
  )
}

export default CardList
