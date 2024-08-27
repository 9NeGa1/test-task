import classNames from 'classnames';
import { Heart, Trash2 } from 'lucide-react';
import React from 'react';
import { useAppDispatch } from '../../app/hooks';
import { deletePhoto, toggleLike } from '../../store/fetchPhotos/fetchPhotos';
import { Link } from 'react-router-dom';

export interface MiniPhoto {
  thumbnailUrl: string;
  title: string;
  id: number;
}

const CardItem: React.FC<MiniPhoto> = ({ thumbnailUrl, title, id }) => {
  const [liked, setLiked] = React.useState(false);
  const dispatch = useAppDispatch();

  const handleLike = (e: React.MouseEvent) => {
    e.preventDefault();
    setLiked(!liked);
    dispatch(toggleLike({ id, thumbnailUrl, title }));
  };

  const handleDelete = (e: React.MouseEvent) => {
    e.preventDefault();
    dispatch(deletePhoto({ id, thumbnailUrl, title }));
  };

  const truncatedTitle =
    title.length > 60
      ? title.substring(0, 60) + '...'
      : title;

  return (
    <Link to={`/item/${id}`}>
      <div className={classNames('border p-5 flex gap-5')}>
        <img src={thumbnailUrl} alt={title} className='w-[150px] h-[150px]' />
        <div className='flex flex-col justify-between'>
          <h2 className='mb-3 text-xl line-clamp-3 overflow-hidden'>
            {truncatedTitle}
          </h2>
          <div className='flex gap-5'>
            <Heart
              onClick={handleLike}
              className={classNames(
                'text-gray-800 transition duration-300 ease-in-out hover:text-gray-400 hover:opacity-75',
                { 'text-red-500': liked, 'fill-red-500': liked }
              )}
            />
            <Trash2
              onClick={handleDelete}
              className='text-gray-800 transition duration-300 ease-in-out hover:text-gray-400 hover:opacity-75'
            />
          </div>
        </div>
      </div>
    </Link>
  );
};

export default CardItem;