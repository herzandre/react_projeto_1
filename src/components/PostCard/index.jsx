import './styles.css';
import { Imagem } from '../Imagem';
import P from 'prop-types';

export const PostCard = ({ title, cover, id, body }) => (
  <div id={id} className="post">
    <Imagem cover={cover} title={title} />
    <div className="post-content">
      <h2>
        {' '}
        {title} {id}{' '}
      </h2>
      <p> {body} </p>
    </div>
  </div>
);

PostCard.propTypes = {
  title: P.string.isRequired,
  cover: P.string.isRequired,
  id: P.number.isRequired,
  body: P.string.isRequired,
};
