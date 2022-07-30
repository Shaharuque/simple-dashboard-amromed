import React from 'react'

export const ColumnFilter = ({ column }) => {
  const { filterValue, setFilter } = column
  return (
    <span style={{display:'flex',alignItems:'center'}}>
      <p>Search:</p>
      <input
        style={{height:'20px',width:'100px',marginLeft:'3px'}}
        value={filterValue || ''}
        onChange={e => setFilter(e.target.value)}
      />
    </span>
  )
}
