import React, { useContext, useState } from 'react';
import { newContext } from './Contex';

const Home = () => {
  const { state } = useContext(newContext);
  const [bodyId, setBodyId] = useState("");

  const handleClick = (id) => {
    setBodyId(id);
  };

  return (
    <div>
      <ul>
        {state.map((each) => (
          <li key={each.id}>
            <button onClick={() => handleClick(each.id)}> 
              <h4>{each.title}</h4>
            </button>
               {bodyId === each.id && <div>
                <p>{each.body}</p></div>}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Home;



