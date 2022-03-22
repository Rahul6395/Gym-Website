import React from 'react'

const GallComVideo = (props) => {
    return (
        <div className="videoCom" >
           <video className="videos" poster={props.posters} src={props.gallvideo} controls ></video> 
        </div>
    )
}

export default GallComVideo
