import React from 'react'
import { useRouter } from 'next/router'
const slug = () => {
    const router = useRouter()
    const { pid } = router.query
    
  return (
    <div>
      <p>{pid}</p>
    </div>
  )
}

export default slug
