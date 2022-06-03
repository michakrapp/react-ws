import {ReactElement} from "react";
import {IconButton, TableCell, TableRow} from "@mui/material";
import {Delete, Edit} from "@mui/icons-material";
import {Rating} from "./Rating";
import {Book} from "./Book";

type Props = {
    book: Book,
    handleRate: (book: Book, rating: number) => void,
    handleDelete: (book: Book) => void,
    handleShowForm: (book: Book | null) => void
}

export const ListItem = ({book, handleRate, handleDelete, handleShowForm}: Props) : ReactElement => (
    <TableRow>
        <TableCell>{book.title}</TableCell>
        <TableCell>{book.author}</TableCell>
        <TableCell>{book.isbn}</TableCell>
        <TableCell>
            {Array(5)
                .fill('')
                .map((e, index) => (
                    <Rating key={index} book={book} handleRate={handleRate} index={index} />
                ))}
        </TableCell>
        <TableCell>
            <IconButton onClick={() => handleDelete(book)}>
                <Delete />
            </IconButton>
        </TableCell>
        <TableCell>
            <IconButton onClick={() => handleShowForm(book)}>
                <Edit />
            </IconButton>
        </TableCell>
    </TableRow>
)