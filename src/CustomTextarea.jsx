import './CustomTextarea.css';

function CustomTextarea({ text, bgcolor }) {
  return (
    <textarea className="custom-textarea" style={{ backgroundColor: bgcolor }}>
      {text}
    </textarea>
  );
}

export default CustomTextarea;
