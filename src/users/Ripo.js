import React from "react";

function Ripo({ repo }) {
  return (
    <div className='card'>
      <div className='card-body'>
        <h5 className='card-title'> {repo.name} </h5>
        <p className='card-text'>{repo.description}</p>
        <ul className='list-inline'>
          <li className='list-inline-item '>watches : {repo.watchers}</li>
          <li className='list-inline-item '>Stars : {repo.stargazers_count}</li>
          <li className='list-inline-item '>forks : {repo.forks}</li>
        </ul>
      </div>
    </div>
  );
}

export default Ripo;
