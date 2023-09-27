import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBookmark, faStar, faBook } from '@fortawesome/free-solid-svg-icons';

const FilterBar = () => {
  return (
    <div>
        <div className="px-6 py-4 mt-6 flex justify-start align-middle bg-slate-200">
            <h1 className='font-bold'>Filter options:</h1>
            <div className='ml-12'>
                <FontAwesomeIcon icon={faStar} size="md" /><span className='ml-1'>Average rating</span>
            </div>
            <div className='ml-8'>
                <FontAwesomeIcon icon={faBookmark} size="md" /><span className='ml-1'>Want to Read</span>
            </div>
            <div className='ml-8'>
                <FontAwesomeIcon icon={faBook} size="md" /><span className='ml-1'>Have Read</span>
            </div>
            <div className='ml-8'>
                <FontAwesomeIcon icon={faBookOpen} size="md" /><span className='ml-1'>Currently Reading</span>
            </div>
        </div>
    </div>
  )
}

export default FilterBar