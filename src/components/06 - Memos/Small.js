import React, { memo } from 'react'

const Small = memo(({value}) => {
  
    console.log('   Me renderizo :(    ');
    return (
    <small>{value}</small>
  )
})

export default Small