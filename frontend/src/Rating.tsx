import {IconButton} from "@mui/material";
import {Star, StarBorder} from "@mui/icons-material";
import {Book} from "./Book";

type Props = {
    book: Book,
    handleRate: (book: Book, rating: number) => void,
    index: number
}

export const Rating = ({book, handleRate, index}: Props) => {

    return (
        <IconButton
            onClick={() => handleRate(book, index + 1)}
            key={index}
        >
            {book.rating < index + 1 ? <StarBorder /> : <Star />}
        </IconButton>
    );
}