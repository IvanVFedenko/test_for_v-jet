import React from 'react';

const ShownJewelry = (props) => {
  const { data } = props;
    return(
      <div className="card">   
        {data.map(item => 
          <div key={item.id}>
            <ul className="card__list">
              <li className="card__li">
                #{item.id}
              </li>
              <li>
                {item.title}
              </li>
              <li>
                {item.sku}
              </li>
              <li>
                <img src={`${item.image}`} alt="ring" className="card__list_image"/>
              </li>
              <p className="card__list_option_title"> product options:</p>
              <li className="card__list_option">
                Metal type: {item.options[0].metal_type}
              </li>
              <li className="card__list_option">
                Metal color: {item.options[0].metal_color}
              </li>
              <li className="card__list_option">
                Stone shape: {item.options[0].stone_shape}
              </li>
              <li className="card__list_option">
                Gemstone color: {item.options[0].gemstone_color}
              </li>
              <li>
              <div className="card__price">
                <div className="card__price_sum">{Math.floor(item.price).toFixed(2)}</div>
                <div>{item.currency}</div>
              </div>
              </li>
            </ul>
          </div>
        )} 
    </div>
    )
}

export default ShownJewelry;