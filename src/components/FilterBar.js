import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBookmark, faStar, faBook } from '@fortawesome/free-solid-svg-icons';

const FilterBar = ({ onSort }) => {


    const handleFilterChange = (e) => {
        const value = e.target.value;
        onFilter(value);
    };

  return (
    <div className='sticky top-0 bg-white opacity-95'>
        <div className="text-4xl font-bold text-center">Devies Reads</div>
        <div className="text-2xl font-bold text-center tracking-wider">Because dev's read</div>
        <div className="px-6 py-4 mt-6 flex justify-start align-middle bg-slate-200">
            <h1 className='font-bold'>Filter options:</h1>
            <div className='ml-12' onClick={() => onSort('highestRating')} style={{cursor: 'pointer'}}>
                <FontAwesomeIcon icon={faStar} size="sm" /><span className='ml-1'>Average rating</span>
            </div>
            <div className='ml-8' onClick={() => onSort('mostWanted')} style={{cursor: 'pointer'}}>
                <FontAwesomeIcon icon={faBookmark} size="sm" /><span className='ml-1'>Want to Read</span>
            </div>
            <div className='ml-8' onClick={() => onSort('mostRead')} style={{cursor: 'pointer'}}>
                <FontAwesomeIcon icon={faBook} size="sm" /><span className='ml-1'>Have Read</span>
            </div>
            <div className='ml-8' onClick={() => onSort('currentReading')} style={{cursor: 'pointer'}}>
                <FontAwesomeIcon icon={faBookOpen} size="sm" /><span className='ml-1'>Currently Reading</span>
            </div>
        </div>
    </div>
  )
}

export default FilterBar