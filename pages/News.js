import React, { useEffect, useState } from 'react'
import NewsItem from './NewsItem';

function News(props) {
    const [articles, setArticles] = useState([]);
    const [page, setPage] = useState(1);
    const [totalResults, setTotalResults] = useState(0);
    const updateNow = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=in&country=general&apiKey=98421eb58c7c4258bf674a2a932c747f&page=${page}&pagesize=10`;
        // let data = await fetch(url)
        const data = await (await fetch(url)).json();
        setArticles(data.articles);
        setTotalResults(data.totalResults);
    }
    useEffect(() => {
        updateNow()
    },)
    const handlePrevClick = async () => {
        setPage(page - 1)
        updateNow();
    
      }
    
      const handleNextClick = async () => {
        console.log("Next");
        setPage(page + 1);
    
        updateNow();
    
      }
    
    
      const fetchMoreData = async () => {
        let url = `https://newsapi.org/v2/top-headlines?country=${props.country}&country=${props.category}&apiKey=98421eb58c7c4258bf674a2a932c747f&page=${page + 1}&pagesize=${props.pageSize}`;
        setPage(page + 1);
        let data = await fetch(url);
        let parseDat = await data.json();
        console.log(parseDat);
        setArticles(parseDat.articles);
        setTotalResults(parseDat.totalResults);
        setLoading(false);
    
      };

    return (
        <div>
            <div className="container my-3 ">
                <div className="row">
                    {articles.map((element) => {
                        return <div className="col-md-4" key={element.url}>
                            <NewsItem title={element.title ? element.title : ""} discription={element.description ? element.description : ""} imageUrl={element.urlToImage ? element.urlToImage : "https://image.cnbcfm.com/api/v1/image/107004840-1642794265011-2022-01-21T190502Z_3_LYNXMPEI0K10G_RTROPTP_4_SHELL-OUTLOOK.JPG?v=1642794359"} newsUrl={element.url} source={element.source.name} />
                        </div>
                    })}
                </div>
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={page <= 1} type="button" onClick={handlePrevClick} className="btn btn-primary btn-lg"> &larr; Prev</button>
                <button disabled={page + 1 > Math.ceil(totalResults / 18)} type="button" onClick={handleNextClick} className="btn btn-secondary btn-lg">Next &rarr;</button>
            </div>
        </div>
    )
}

export default News
