import P from 'prop-types';
export const Imagem = ({ cover, title }) => <img src={cover} alt={title}></img>;

Imagem.propTypes = {
  cover: P.string.isRequired,
  title: P.string.isRequired,
};
