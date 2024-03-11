import React from 'react'

const Pagination = ({postPerPage, totalPosts, pagenate}) => {
    const PageNumbers = []

    for(let i = 1; i<= Math.ceil(totalPosts / postPerPage); i++){
        PageNumbers.push(i)
    }
  return (
    <nav>
        <ul>
            {PageNumbers.map( (numbers) => (
                <li key={numbers} className='page-item'>
                    <a href="#" className='page-link' onClick={() => pagenate(numbers)}>
                        {numbers}
                    </a>
                </li>
            ))}
        </ul>
    </nav>
  )
}

export default Pagination