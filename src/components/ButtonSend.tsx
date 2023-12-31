/** 
 * Компонент ButtonSend отрисовывает кнопку для отправки сообщения на сервер
 */
export default function ButtonSend(): React.ReactElement {

  return (
    <button
      type="submit"
      className='send'
    >
      <svg className="iconSend" version="1.1" viewBox="0 0 80 80" xmlns="http://www.w3.org/2000/svg">
        <path d="M40,5.4C20.9,5.4,5.4,20.9,5.4,40S20.9,74.6,40,74.6S74.6,59.1,74.6,40C74.5,20.9,59.1,
          5.5,40,5.4z M40,71.6    C22.6,71.6,8.4,57.4,8.4,40S22.6,8.4,40,8.4S71.6,22.6,71.6,40c0,0,0,
          0,0,0C71.5,57.4,57.4,71.5,40,71.6z"
        />
        <path d="M21.4,16.5L32.2,40L21.4,63.5L63.1,40L21.4,16.5z M28,23.7l26.3,14.8H34.8L28,23.7z M34.8,
        41.5h19.5L28,56.3L34.8,41.5z" fill="red" />
      </svg>
    </button>
  )
};