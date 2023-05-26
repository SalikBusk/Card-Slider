import React from 'react'

interface ContainerProps {
    children: React.ReactNode;
}

const Container: React.FC<ContainerProps> = ({
    children
}) => {
  return (
    <div className='max-w-[2520px] m-auto p-6'>
        {children}
    </div>
  )
}

export default Container