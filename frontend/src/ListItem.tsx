import {ReactElement} from "react";
import {IconButton, TableCell, TableRow} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";
import {Rating} from "./Rating";
import {Book} from "./Book";

type Props = {
    book: Book;
    onDelete: (book: Book) => void;
    onEdit: (book: Book) => void;
    onRate: (book: Book, rating: number) => void;
};

export const ListItem = ({book, onEdit, onRate, onDelete}: Props) : ReactElement => {

    return (
        <TableRow>
            <TableCell>{book.title}</TableCell>
            <TableCell>{book.author}</TableCell>
            <TableCell>{book.isbn}</TableCell>
            <TableCell>
                <Rating
                    book={book}
                    onRate={onRate}
                />
            </TableCell>
            <TableCell>
                <IconButton onClick={() => onDelete(book)}>
                    <Delete/>
                </IconButton>
            </TableCell>
            <TableCell>
                <IconButton onClick={() => onEdit(book)}>
                    <Edit/>
                </IconButton>
            </TableCell>
        </TableRow>
    );
}