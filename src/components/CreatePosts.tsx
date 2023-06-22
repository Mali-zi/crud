import ButtonDelete from './ButtonDelete';
import { IProps2 } from '../models/index';

/** 
 * Компонент CreateWatches выводит список часов с данными, введенными пользователем.
 * В качестве props принимает переменные состояния: watches и setWatches, а также 
 * переменную состояния time.
 */
export default function CreatePosts({posts, setPosts}: IProps2): React.ReactElement{

  let postsList: JSX.Element[] = [<></>];
  if (posts) {
    postsList = posts.map(post => {
      return (
        <li 
          key={post.id}
          className="mainList"
        >
            <ButtonDelete handleDelete={() => {
              let answer = window.confirm('Are you sure?');
              if (answer) {
                setPosts(
                  posts.filter(a =>
                    a.id !== post.id
                  )
                );
            }}}
            />
          <div className='textPlace'>
            {post.text}
          </div>
        </li>
      )
    });
  };

  return (
    <div className='postsStore'>
      <ul className="mylist">
        {postsList}
      </ul>
    </div>
  )
}