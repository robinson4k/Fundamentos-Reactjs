import styles from './Avatar.module.css'
import PropTypes from 'prop-types';
export function Avatar({ hasBorder = true, src }) {
    return (
        <img
          className={hasBorder ? styles.avatarWithBorder : styles.avatar}
          src={src}
        />
    )
}

Avatar.propTypes = {
    hasBorder: PropTypes.bool, // Define que hasBorder é um booleano
    src: PropTypes.string.isRequired, // Define que src é uma string obrigatória
};