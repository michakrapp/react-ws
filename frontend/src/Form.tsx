import { Box, Button, TextField } from '@mui/material';
import produce from 'immer';
import { WritableDraft } from 'immer/dist/internal';
import {
  ChangeEvent,
  FormEvent,
  ReactElement,
  useEffect,
  useState,
} from 'react';
import { InputBook } from './Book';

type Props = {
  book?: InputBook | null;
  onSave: (book: InputBook) => void,
  onCancel: () => void,
};

const initialBook: InputBook = {
    title: '',
    author: '',
    isbn: '',
};

function Form({ book, onCancel, onSave }: Props): ReactElement {
    const [formState, setFormState] = useState<InputBook>(initialBook);

    useEffect(() => {
        if (book) {
            setFormState(book);
        }
    }, [book]);

    function handleChange(e: ChangeEvent<HTMLInputElement>) {
        setFormState((prevState) =>
            produce(prevState, (draftState) => {
                draftState[e.target.name as keyof WritableDraft<InputBook>] = e.target
                    .value as never;
            })
        );
    }

    function handleSubmit(e: FormEvent) {
        e.preventDefault();
        onSave(formState);
    }

    function handleCancel() {
        setFormState(initialBook);
        onCancel();
    }

  return (
    <Box>
      <form onSubmit={handleSubmit}>
        <div>
          <TextField
            label="Title"
            value={formState.title}
            name="title"
            onChange={handleChange}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="Author"
            value={formState.author}
            name="author"
            onChange={handleChange}
            margin="normal"
          />
        </div>
        <div>
          <TextField
            label="ISBN"
            value={formState.isbn}
            name="isbn"
            onChange={handleChange}
            margin="normal"
          />
        </div>
        <Button type="submit">save</Button>
        <Button onClick={handleCancel}>cancel</Button>
      </form>
    </Box>
  );
}

export default Form;
