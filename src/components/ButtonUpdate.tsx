import { ButtonProps } from '../models/index';

/** 
 * Компонент ButtonUpdate отрисовывает кнопку для обновления экрана пользователя
 */
export default function ButtonUpdate({handleUpdate}: ButtonProps): React.ReactElement {

  return (
    <button
      type="button"
      className='update'
      onClick={handleUpdate}
    >

    <svg fill="none" height="50" strokeWidth="1" viewBox="0 0 24 24" width="50" xmlns="http://www.w3.org/2000/svg">
      <circle cx="12" cy="12" r="10" stroke="black" strokeWidth="1"/>
      <path d="M16.5829 9.66667C15.8095 8.09697 14.043 7 11.9876 7C9.38854 7 7.25148 8.75408 7 11" 
        stroke="green" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M14.4939 9.72222H16.4001C16.7315 9.72222 17.0001 9.45359 17.0001 9.12222V7.5" 
        stroke="green" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M7.41707 13.6667C8.19054 15.6288 9.95698 17 12.0124 17C14.6115 17 16.7485 14.8074 17 12" 
        stroke="green" strokeLinecap="round" strokeLinejoin="round"/>
      <path d="M9.5061 13.6222H7.59992C7.26855 13.6222 6.99992 13.8909 6.99992 14.2222V16.4" 
        stroke="green" strokeLinecap="round" strokeLinejoin="round"/>
    </svg>

  </button>
  )
};