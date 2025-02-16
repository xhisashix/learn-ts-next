import React from 'react'

interface TitleProps {
  text: string;
};

function Title(props: TitleProps) {
  return (
    <div>
      <h1 className="text-2xl font-bold">{props.text}</h1>
    </div>
  )
}

export default Title