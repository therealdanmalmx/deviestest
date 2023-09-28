import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBookmark, faStar, faBook } from '@fortawesome/free-solid-svg-icons';

const FilterBar = ({ books }) => {

    const {averageRating, haveRead, currentlyReading, wantToRead} = books;

    console.log('books from landing', books);

    const rateBook = () => {
        console.log('Book rated')
    };
    const wishToRead = () => {
        console.log('Want to read')
    };
    const alreadyRead = () => {
        console.log('Have read')
    };
    const reading = () => {
        console.log('Reading')
    };

  return (
    <div className='sticky top-0 bg-white opacity-95'>
        <div className="text-4xl font-bold text-center">Devies Reads</div>
        <div className="text-2xl font-bold text-center tracking-wider">Because dev's read</div>
        <div className="px-6 py-4 mt-6 flex justify-start align-middle bg-slate-200">
            <h1 className='font-bold'>Filter options:</h1>
            <div className='ml-12' onClick={rateBook} style={{cursor: 'pointer'}}>
                <FontAwesomeIcon icon={faStar} size="sm" /><span className='ml-1'>Average rating</span>
            </div>
            <div className='ml-8' onClick={wishToRead} style={{cursor: 'pointer'}}>
                <FontAwesomeIcon icon={faBookmark} size="sm" /><span className='ml-1'>Want to Read</span>
            </div>
            <div className='ml-8' onClick={alreadyRead} style={{cursor: 'pointer'}}>
                <FontAwesomeIcon icon={faBook} size="sm" /><span className='ml-1'>Have Read</span>
            </div>
            <div className='ml-8' onClick={reading} style={{cursor: 'pointer'}}>
                <FontAwesomeIcon icon={faBookOpen} size="sm" /><span className='ml-1'>Currently Reading</span>
            </div>
        </div>
    </div>
  )
}

export default FilterBar