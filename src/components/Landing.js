import { useState, useEffect } from "react";
import BookCard from "@/components/BookCard"
import FilterBar from "./FilterBar";
import {deviesFetch} from "@/api/axios";
import { v4 as uuidv4 } from 'uuid';

const Landing = () => {

    const [books, setBooks] = useState([]);
    const [searchQuery, setSearchQuery] = useState("");
    const [filteredRanking, setFilteredRanking] = useState([]); // new state for filtered books

    useEffect( () => {
      const fetchBooks = async () => {
        try {
          const response = await deviesFetch.get("/books");
          setBooks(response.data);

        } catch (error) {
          console.log(error)
        }
      };
      fetchBooks();
    }, []);

    const sortByMostRead = () => {
      const sortedBooks = [...books].sort((a, b) => b.haveRead - a.haveRead);
      setBooks(sortedBooks);
    };

    const sortByMostWanted = () => {
        const sortedBooks = [...books].sort((a, b) => b.wantToRead - a.wantToRead);
        setBooks(sortedBooks);
    };

    const sortByCurrentlyReading = () => {
        const sortedBooks = [...books].sort((a, b) => b.currentlyReading - a.currentlyReading);
        setBooks(sortedBooks);
    };
    const sortByHighestRating = () => {
        const sortedBooks = [...books].sort((a, b) => b.averageRating - a.averageRating);
        setBooks(sortedBooks);
    };

    const sortByName = (query) => {
        setSearchQuery(query);
    };
    const handleSort = (sortType) => {
        switch(sortType) {
            case 'mostRead':
                sortByMostRead();
                break;
            case 'mostWanted':
                sortByMostWanted();
                break;
            case 'highestRating':
                sortByHighestRating();
                break;
            case 'currentReading':
                sortByCurrentlyReading();
                break;
            case 'name':
                sortByName();
                break;
            default:
                break;
        }
    };

    return (
        <section>
            <FilterBar onSort={handleSort} onSearch={sortByName} books={books}/>
            <div className="mt-10 flex flex-wrap gap-10">
            {books.filter(book => book.name.toLowerCase().includes(searchQuery.toLowerCase())).map(book => (
                book.id !== undefined &&
                (<div key={book.id}>
                    <BookCard bookInformation={book} />
                </div>)
                ))}
            </div>
        </section>
    )
}

export default Landing;