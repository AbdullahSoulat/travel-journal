import React from "react"
import locationSVG from "../images/location.svg"

export default function Location(props) {
    return (
        <section>
            <img src={props.item.imageUrl} className="journal-image" />
            <div>
                <img src={locationSVG} alt="location svg" />
                <span className="location-name" >{props.item.location}</span>
                <a href={props.item.googleMapsUrl}><span className="view-on-maps">View on Google Maps</span></a>
                <h1>{props.item.title}</h1>
                <h2>{`${props.item.startDate} - ${props.item.endDate}`}</h2>
                <p>{props.item.description}</p>
            </div>
        </section>
    )
}