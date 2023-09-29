import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faBookOpen, faBookmark, faStar, faBook } from '@fortawesome/free-solid-svg-icons';

const FilterBar = ({ onSort, onSearch, onGenreChange, books, genres }) => {

    // List only unique names and give undefined genre the name of Other
    genres = [...new Set(books.map(book => book.genre || 'Other'))];

    return (
    <div className='sticky top-0 bg-white opacity-95'>
        <div className="text-4xl font-bold text-center">Devies Reads</div>
        <div className="text-2xl font-bold text-center tracking-wider">Because dev's read</div>
        <div className="px-6 py-4 mt-6 flex justify-between items-center bg-slate-200">
            <div className='flex'>
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
            <div className='flex gap-10'>
                <div>
                    <label htmlFor="search" style={{ marginRight: '10px' }}>Search book:</label>
                    <input
                        type="text"
                        placeholder="Search by name"
                        onChange={(e) => onSearch(e.target.value)}
                        style={{padding: '1rem'}}
                        id="search"
                    />
                </div>
                {
                    <div>
                    <label htmlFor="genreSelect" style={{ marginRight: '10px' }}>Select Genre:</label>
                    <select onChange={(e) => onGenreChange(e.target.value)} style={{padding: '1rem'}}>
                        <option value="">All Genres</option>
                        {genres.map((genre) =>
                            <option key={genre} value={genre}>{genre}</option>
                        )}
                    </select>
                </div>
                }
            </div>
        </div>
    </div>
    )
}

export default FilterBar