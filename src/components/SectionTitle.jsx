import React from 'react'

const SectionTitle = ({children, id}) => {
    return (
        <>
            <h1 
                id={id && id}
                className='pt-12 pb-4 text-primaryColor dark:text-primaryColorDark text-2xl md:text-3xl font-medium'>{children}</h1>
        </>
    )
}

export default SectionTitle
