import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBookmark, faStar, faBook } from '@fortawesome/free-solid-svg-icons';

const BookDetailsInfo = ({ book }) => {
    const { name, genre, coverUrl, description, averageRating, haveRead, currentlyReading, wantToRead } = book;
    const isLoggedIn = true;

  return (
    <div className="flex items-center w-screen justify-center h-screen">
      <div className='flex p-6 border-indigo-200 border'>
          <div>
            <Image
                src={coverUrl}
                alt={name}
                width={400}
                height={600}
                priority
                className='h-full'
            />
            <div>
              <span className="relative bottom-12 left-8 bg-gray-700 rounded-full px-3 py-1 text-sm font-semibold text-white">{`#${genre}`}</span>
            </div>
        </div>
          <div className="flex flex-col justify-between">
            <div className='flex flex-col'>
              <div className="ml-12">
                <p className="text-5xl font-bold w-[700px] capitalize">{name}</p>
                <div className='mt-24 bg-gray-200 p-4 rounded-xl'>
                  <p className="text-2xl font-bold">Description</p>
                  <p className="mt-2 w-full max-w-3xl">{description}</p>
                </div>
              </div>
            </div>
            <div>
              { isLoggedIn &&
                <div className="mt-6 flex justify-around items-center">
                  <div className='ml-12'>
                      <FontAwesomeIcon icon={faStar} size="sm" /><span className='ml-1'>Rate book</span>
                  </div>
                  <div className='ml-8'>
                      <FontAwesomeIcon icon={faBookmark} size="sm" /><span className='ml-1'>I want to read</span>
                  </div>
                  <div className='ml-8'>
                      <FontAwesomeIcon icon={faBook} size="sm" /><span className='ml-1'>I have read</span>
                  </div>
                  <div className='ml-8'>
                      <FontAwesomeIcon icon={faBookOpen} size="sm" /><span className='ml-1'>Reading</span>
                  </div>
                </div>
              }
            </div>
          </div>
      </div>
    </div>
  )
}

export default BookDetailsInfo;