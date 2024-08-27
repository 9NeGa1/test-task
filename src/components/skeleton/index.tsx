import classNames from "classnames"

const Skeleton = () => {
  return (
    <div className={classNames('border p-5 flex gap-5 animate-pulse bg-gray-200')}>
  <div className='w-[150px] h-[150px] bg-gray-300 rounded'></div>
  <div className='flex flex-col justify-between'>
    <h2 className='mb-3 text-xl bg-gray-300 w-[166px] h-[84px] rounded'></h2>
    <div className='flex gap-5'>
      <div className='text-gray-800 transition duration-300 ease-in-out hover:text-gray-400 hover:opacity-75 w-6 h-6 bg-gray-300 rounded'></div>
      <div className='text-gray-800 transition duration-300 ease-in-out hover:text-gray-400 hover:opacity-75 w-6 h-6 bg-gray-300 rounded'></div>
    </div>
  </div>
</div>
  )
}

export default Skeleton
