import './index.scss'

import React from 'react'

export default function Animated_letters({ letterClass, strArray, idx }) {
  return (
    <span>
      {strArray && strArray.map((char, i)=>(
            <span key={char + i} className={`${letterClass} _${ i + idx }`}>
                {char}
            </span>
        ))}
    </span>
  )
}
