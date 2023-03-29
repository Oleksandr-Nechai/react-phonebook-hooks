import PropTypes from 'prop-types';

import s from './Section.module.css';

function Section({ text, children, header }) {
  return (
    <div className={s.section}>
      {header ? (
        <h1 className={s.header}>{text}</h1>
      ) : (
        <h2 className={s.header}>{text}</h2>
      )}
      {children}
    </div>
  );
}

export default Section;

Section.propTypes = {
  text: PropTypes.string.isRequired,
  header: PropTypes.bool,
  children: PropTypes.node.isRequired,
};
