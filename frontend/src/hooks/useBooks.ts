import {useEffect, useState} from "react";
import {Book, InputBook} from "../Book";
import produce from "immer";

type ReturnValue = {
    books: Book[],
    handleRate: (book: Book, rating: number) => void,
    handleSave: (book: InputBook) => void,
    handleDelete: (book: InputBook) => void,
}

export const useBooks = (): ReturnValue => {
    const [books, setBooks] = useState<Book[]>([]);

    useEffect(() => {
        fetch('http://localhost:3001/books')
            .then((response) => response.json())
            .then((data) => setBooks(data));
    }, []);

    function handleRate(book: Book, rating: number): void {
        fetch(`http://localhost:3001/books/${book.id}`, {
            method: 'PUT',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify({ ...book, rating }),
        }).then(() => {
            setBooks((prevState) => {
                return produce(prevState, (draftState) => {
                    draftState.map((draftBook) => {
                        if (draftBook.id === book.id) {
                            draftBook.rating = rating;
                        }
                        return draftBook;
                    });
                });
            });
        });
    }

    function handleDelete(book: InputBook): void {
        if (window.confirm('are you sure?')) {
            fetch(`http://localhost:3001/books/${book.id}`, {
                method: 'DELETE',
            }).then(() => {
                setBooks((prevState) => {
                    return produce(prevState, (draftState) => {
                        return draftState.filter((draftBook) => draftBook.id !== book.id);
                    });
                });
            });
        }
    }

    function handleSave(book: InputBook): void {
        let url = 'http://localhost:3001/books';
        const config = {
            method: 'POST',
            headers: {
                'content-type': 'application/json',
            },
            body: JSON.stringify(book),
        };
        if (book.id) {
            config.method = 'PUT';
            url += `/${book.id}`;
        }
        fetch(url, config)
        .then((response) => response.json())
        .then((data) => {
            setBooks((prevState) =>
                produce(prevState, (draftState) => {
                    if (book.id) {
                        return draftState.map((draftBook) =>
                            draftBook.id === data.id ? data : draftBook
                        );
                    } else {
                        draftState.push(data);
                    }
                })
            );
        });
    }

    return {
        books,
        handleRate,
        handleSave,
        handleDelete,
    }
}