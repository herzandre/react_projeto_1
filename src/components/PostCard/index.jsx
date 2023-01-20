import './styles.css';
import { Imagem } from '../Imagem';

export const PostCard = ({ title, cover, id, body }) => (
        <div id={id} className='post'>
            <Imagem cover={cover} title={title} />
            <div className="post-content">
            <h2> {title} {id} </h2>
            <p> {body} </p>
            </div>
        </div>
    );
