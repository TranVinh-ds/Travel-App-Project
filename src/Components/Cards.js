import React from 'react'
import map from '../img/location-map.jpg';

const Cards = (props) => {
  return (
    <div>
        <div className="container">
            <img className="card--img" src={props.item.imageUrl} alt='japan' />
            <div className="container2">
                <div className="card--title">
                    <img className="location-img" src={map} alt='location' />
                    <span className='country'>{props.item.location}</span>
                    <span className='map'><a href={props.item.googleMapsUrl} target="_blank" >View on Google Map</a></span>
                </div>
                <h3>{props.item.title}</h3>
                <span className="bold">{props.item.startDate} -</span><span className="bold">{props.item.endDate} </span>
                <p>{props.item.description}</p>
            </div>
        </div>
    </div>
  )
}

export default Cards