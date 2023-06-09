import React from 'react';

type Props = {
  text: string;
  onClick: () => void;
};

export default function ColorButton({ text, onClick }: Props) {
  return (
    <button
      className='bg-white rounded-sm text-base p-[0.3rem] hover:opacity-90 transition-opacity'
      onClick={onClick}
    >
      {text}
    </button>
  );
}
