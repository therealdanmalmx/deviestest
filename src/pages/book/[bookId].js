import {deviesFetch} from "@/api/axios";
import BookDetailsInfo from "@/components/BookDetailsInfo";
import { v4 as uuidv4 } from 'uuid';

export const getStaticPaths = async () => {
    const response = await deviesFetch.get("/books");
    const books = response.data;

    const paths = books.filter(book => (book.id === undefined ? book.id = uuidv4() : book.id)).map((book) => ({
        params: { bookId: book.id.toString()
        },
    }));

    return {
        paths,
        fallback: false
    };
};

export const getStaticProps = async ({params}) => {
    const { bookId }  = params;
    const response = await deviesFetch.get(`/books/${bookId}`);
    const book = response.data;

    return {
        props: { book }
    };
};

const BookDetails = ({ book }) => {
    return (
        <div className="flex items-center justify-center h-full">
            <BookDetailsInfo book={book}/>
        </div>
    )
};

export default BookDetails;