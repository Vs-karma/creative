import React from 'react'

function NewsItem({ title, discription, imageUrl, newsUrl, source }) {
    return (
        <>
            {/* <div className='my-3'>
                <div className="card">
                    <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                        <span className=" badge rounded-pill bg-danger" >
                            {source}
                        </span>
                    </div>
                    <img src={imageUrl} className="card-img-top" alt="..." />
                    <div className="card-body">
                        <h5 className="card-title" style={{ color: "black" }}>{title}...</h5>
                        <p className="card-text" style={{ color: "black" }}>{discription}...</p>
                        <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                    </div>
                </div>

            </div> */}
            <div className="newItem">
                <div className="itemLeft">
                    <div className="itemSource">
                        {source}
                    </div>
                    <img className='Image' src={imageUrl} alt="..." />
                </div>
                <div className="itemRight">
                    <div className="itemBody">
                        <p className="itemHeading">{title}...</p>
                        <p className="itemDisc">{discription}</p>
                        <a href={newsUrl} target='_blank' className="button">Read More</a>
                    </div>
                </div>

            </div>
        </>
    )
}

export default NewsItem
