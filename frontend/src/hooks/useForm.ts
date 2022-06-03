import {Book} from "../Book";
import {useState} from "react";

type ReturnValue = {
    showForm: boolean,
    edit: Book | null,
    handleShowForm: (book: Book | null) => void,
    hideForm: () => void,
}

export const useForm = (): ReturnValue => {
    const [showForm, setShowForm] = useState(false);
    const [edit, setEdit] = useState<Book | null>(null);

    function handleShowForm(book: Book | null): void {
        setEdit(book);
        setShowForm(true);
    }

    function hideForm() {
        setEdit(null);
        setShowForm(false);
    }

    return {
        showForm,
        edit,
        handleShowForm,
        hideForm,
    };
}