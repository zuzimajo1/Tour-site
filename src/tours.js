
import {Tour} from './tour'
export const Tours = ({ tours, RemoveID }) => {
  return (
    <>
      <section className="main">
        <div className="container">
          <h2 className="title">our tours</h2>
          <div className="underlinediv"></div>
          <div className="wrapper">
            {tours.map((items) => {
              return <Tour key={items.id} {...items} RemoveID={RemoveID} />;
            })}
          </div>
        </div>
        <p className='author'>
          Coded by: <span className='authorname'>Zuzim Ajo</span>
        </p>
      </section>
    </>
  );
};
