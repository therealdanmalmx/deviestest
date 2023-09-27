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
            <div className="text-4xl font-bold text-center">Devies Reads</div>
            <div className="text-2xl font-bold text-center tracking-wider">Because dev's read</div>
            <div>
              <FilterBar />
            </div>
            <div className="mt-10 flex flex-wrap gap-10">
            {books.map(book => (
                book.id === undefined ?
                (book.id = uuidv4()) :
                (<div key={book.id}>
                    <BookCard bookInformation={book} />
                </div>)
                ))}
            </div>
        </section>
    )
}

export default Landing;