import './CustomNav.css';

function CustomNav({ links, linkTexts }) {
    const linkElements = links.map((link, index) => <li className="custom-link-item" key={link}><a href={link} key={link + "link"}>{linkTexts[index]}</a></li>);
    return (
    <ul text-align="right" className="custom-nav">
        {linkElements}
    </ul>
  );
}

export default CustomNav;
