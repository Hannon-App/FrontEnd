import {FC} from 'react';

interface btnLoginProps {
    id: string;
    label?: string;
    src?: string;
    onClick?: React.MouseEventHandler;
}

const ButtonLogin: FC<btnLoginProps> = ({id, label,src, onClick}) => {
  return (
    <>
      <button
        id={id}
        onClick={onClick}
        className={`flex gap-3 justify-center items-center text-white bg-sky-500 w-10 h-10 hover:bg-sky-700 rounded-md px-4 py-2 font-semibold`}
      >
        {label} <img src={`./src/assets/${src}.svg`} alt={`${src}`} />
      </button>
    </>
  )
}

export default ButtonLogin