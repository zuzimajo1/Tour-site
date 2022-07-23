import { Main } from "./index";
import React from 'react';


export const Tour = ({id, image, title,price, description, RemoveID}) => {
const [click, Setclick] = React.useState(false);

    return (
      <section>
        <div className="mainwrapper">
          <div>
            <img className="image" src={image}></img>
          </div>
          <div className="mainwrapper2">
            <div className="wrapper2">
              <h3 className="wrappertitle">{title}</h3>
              <p>{price}</p>
            </div>
            <div className='descriptionwrapper'>
              <p className="description">
                {click ? description : `${description.substring(0, 200)}...`}
              </p>
              <button
                className="button2"
                type="button"
                onClick={() => Setclick(!click)}
              >
                {click ? `See less` : `Read More`}
              </button>
            </div>
            <div className="div2">
              <button
                className="button1"
                type="button"
                onClick={() => RemoveID(id)}
              >
                Not Interested
              </button>
            </div>
          </div>
        </div>
      </section>
    );
   
    
};
