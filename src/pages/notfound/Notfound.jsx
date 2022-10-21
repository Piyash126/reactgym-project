import React from 'react';
import './Notfound.css';
import {Link} from 'react-router-dom';

function Notfound() {
  return (
    <section>
      <div className="container container__notfound">
      <h2>Page not Found</h2>
      <Link to="/" className='btn'>Go Back Home</Link>
      </div>
    </section>
  )
}

export default Notfound