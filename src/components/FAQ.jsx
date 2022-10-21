import React, { useState } from 'react'
import {AiOutlinePlus} from 'react-icons/ai';
import {AiOutlineMinus} from 'react-icons/ai';

export default function FAQ({question, answer}) {
    const [isNavShowing, setIsNavShowing] = useState(false);
  return (
    <article className='faq' onClick={() => setIsNavShowing(prev => !prev)}>
        <div className="faq__question-icon">
            <h4>{question}</h4>
            <button className="faq__icon">
            {isNavShowing ? <AiOutlineMinus/> : <AiOutlinePlus /> }
           </button>
        </div>
        {isNavShowing ? <p>{answer}</p> : ''}
    </article>
  )
}
