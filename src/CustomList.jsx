import './CustomList.css';

function CustomList({ elements, bulletStyle }) {
    const listElements = elements.map((element) => <li className="custom-list-item" key={element}>{element}</li>);
    return (
    <ul className="custom-list" style={{ listStyleType: bulletStyle }}>
        {listElements}
    </ul>
  );
}

export default CustomList;
