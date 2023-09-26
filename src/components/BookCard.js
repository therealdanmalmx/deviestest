import Image from 'next/image'
import Link from 'next/link'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBookmark, faStar, faBook } from '@fortawesome/free-solid-svg-icons';

function BookCard({ bookInformation }) {

    const { name, genre, coverUrl, description, averageRating, haveRead, currentlyReading, wantToRead } = bookInformation;

    return (
    <section>
        <Link href="#">
            <div className="max-w-sm rounded overflow-hidden w-full shadow-lg">
                <Image
                    src={coverUrl}
                    alt={name}
                    width={300}
                    height={200}
                    priority
                    className="object-cover h-48 w-96"
                />
            <div className="px-6 py-4 h-[350px]">
                <div className="font-bold text-xl mb-2 capitalize">{name}</div>
                <div className="text-gray-700 text-base">{description}</div>
            </div>
            <div className="px-6 py-4 mt-6 flex justify-between">
                <div>
                    <FontAwesomeIcon icon={faStar} size="md" /><span className='ml-2'>{averageRating.toFixed(1)}</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBookmark} size="md" /><span className='ml-2'>{wantToRead}</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBook} size="md" /><span className='ml-2'>{haveRead}</span>
                </div>
                <div>
                    <FontAwesomeIcon icon={faBookOpen} size="md" /><span className='ml-2'>{currentlyReading}</span>
                </div>
            </div>
            <div className="px-6 pt-4 pb-2">
                <span className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">{`#${genre}`}</span>
            </div>
            </div>
        </Link>
    </section>
  )
}

export default BookCard