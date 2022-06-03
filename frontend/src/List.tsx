import {Add} from '@mui/icons-material';
import {
  Fab,
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from '@mui/material';
import {ReactElement} from 'react';
import Form from './Form';
import {ListItem} from "./ListItem";
import {useBooks} from "./hooks/useBooks";
import {useForm} from "./hooks/useForm";

function List(): ReactElement {
    const {showForm, edit, handleShowForm, hideForm} = useForm();
    const {books, handleSave, handleRate, handleDelete} = useBooks();

  return (
    <>
      <TableContainer>
        <Table>
          <TableHead>
            <TableRow>
              <TableCell>Title</TableCell>
              <TableCell>Author</TableCell>
              <TableCell>ISBN</TableCell>
              <TableCell>Rating</TableCell>
              <TableCell />
            </TableRow>
          </TableHead>

          <TableBody>
            {books.map((book) => (
                <ListItem
                    key={book.id}
                    book={book}
                    onRate={handleRate}
                    onDelete={handleDelete}
                    onEdit={handleShowForm}
                />
            ))}
          </TableBody>
        </Table>
      </TableContainer>
      <Fab onClick={() => handleShowForm(null)}>
        <Add />
      </Fab>
      {showForm &&
          <Form
            book={edit}
            onSave={(book) => {
                handleSave(book);
                hideForm();
            }}
            onCancel={hideForm} />}
    </>
  );
}

export default List;
