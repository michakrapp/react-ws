import {IconButton} from "@mui/material";
import {Star, StarBorder} from "@mui/icons-material";
import {Book} from "./Book";

type Props = {
    book: Book,
    onRate: (book: Book, rating: number) => void;
}

export const Rating = ({book, onRate}: Props) => (
    <>
    { Array(5).fill('').map((e, index) => (
        <IconButton key={index} onClick={() => onRate(book, index + 1)} aria-label={'rating-button-' + index}>
            {book.rating < index + 1 ? <StarBorder/> : <Star/>}
        </IconButton>
    ))}
    </>
)