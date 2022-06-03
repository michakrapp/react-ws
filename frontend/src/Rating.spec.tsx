import {fireEvent, render, screen} from "@testing-library/react";
import {Rating} from "./Rating";

describe('Rating', () => {
    it('should render correctly', () => {
        render(
            <Rating
                book={{
                    id: 0,
                    title: 'My Book',
                    author: 'Me',
                    isbn: '1234',
                    rating: 3
                }}
                onRate={() => (<></>)}
            />
        );

        expect(screen.getByLabelText('rating-button-0')).toBeVisible();
        expect(screen.getByLabelText('rating-button-1')).toBeVisible();
        expect(screen.getByLabelText('rating-button-2')).toBeVisible();
        expect(screen.getByLabelText('rating-button-3')).toBeVisible();
        expect(screen.getByLabelText('rating-button-4')).toBeVisible();
    });

    it('should rate correctly', () => {
        const onRate = jest.fn();
        const book = {
            id: 0,
            title: 'My Book',
            author: 'Me',
            isbn: '1234',
            rating: 3
        };

        render(
            <Rating
                book={book}
                onRate={onRate}
            />
        );

        fireEvent.click(screen.getByLabelText('rating-button-2'));

        expect(onRate).toHaveBeenCalled();
        expect(onRate).toHaveBeenCalledWith(book, 3);
    })
})