// import s from './Section.module.css';

function Section({ text, children, header }) {
  return (
    <div>
      {header ? <h1>{text}</h1> : <h2>{text}</h2>}
      {children}
    </div>
  );
}

export default Section;
