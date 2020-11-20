import ListItem from './ListItem';
import useList from '../shared/useList';
import './List.css';
// import './List.scss'; - node-sass installieren
import styles from './List.module.css';
import styled from 'styled-components';
import classnames from 'classnames';

const Warning = styled.span`
  background-color: red;
  color: black;
  height: 30px;
  width: 30px;
`;

export default function List() {
  const { items: categories, handleDelete } = useList(
    'http://localhost:3001/categories/',
  );

  if (categories.length === 0) {
    return (
      <div
        style={{ backgroundColor: 'hotpink' }}
        className={classnames({ empty: true }, styles.empty)}
      >
        <Warning critical>No results</Warning> found
      </div>
    );
  } else {
    return categories.map((category) => (
      <ListItem key={category.id} category={category} onDelete={handleDelete} />
    ));
  }
}
