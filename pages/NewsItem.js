import React from 'react'

function NewsItem({ title, discription, imageUrl, newsUrl, source }) {
    return (
        <div className='my-3'>
            <div className="card">
                <div style={{ display: "flex", justifyContent: "flex-end", position: "absolute", right: "0" }}>
                    <span className=" badge rounded-pill bg-danger" >
                        {source}
                    </span>
                </div>
                <img src={imageUrl} className="card-img-top" alt="..." />
                <div className="card-body">
                    <h5 className="card-title" style={{color:"black"}}>{title}...</h5>
                    <p className="card-text" style={{color:"black"}}>{discription}...</p>
                    {/* <a href="#" rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a> */}
                    <a href={newsUrl} rel="noreferrer" target="_blank" className="btn btn-sm btn-primary">Read More</a>
                </div>
            </div>

        </div>
    )
}

export default NewsItem
