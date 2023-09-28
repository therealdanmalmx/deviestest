import { useState, useEffect } from "react";
import BookCard from "@/components/BookCard"
import FilterBar from "./FilterBar";
import {deviesFetch} from "@/api/axios";
import { v4 as uuidv4 } from 'uuid';

const Landing = () => {

    const [books, setBooks] = useState([]);

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

    return (
        <section>
            <FilterBar books={books} />
            <div className="mt-10 flex flex-wrap gap-10">
            {books.map(book => (
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