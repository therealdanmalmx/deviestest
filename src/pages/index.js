import { useState, useEffect } from "react";
import BookCard from "@/components/BookCard"
import deviesFetch from "@/api/axios";

export default function Home() {

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
    <main
      className="min-h-screen p-16"
    >
      <div className="text-4xl font-bold text-center">Devies Reads</div>
      <div className="text-xl font-bold text-center">The ultimate programmers book list</div>
      <div className="mt-10 flex flex-wrap gap-10">
        {books.map((book) => {
          return (
            <div key={book.id}>
              <BookCard bookInformation={book} />
            </div>
          );
        })}
      </div>
    </main>
  )
}

