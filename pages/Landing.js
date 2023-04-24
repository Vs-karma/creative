import React from 'react'
import NewsItem from './NewsItem'
import News from './News'
export async function getServerSideProps() {
    // Fetch data from external API
    let url = `https://newsapi.org/v2/top-headlines?country=in&country=general&apiKey=98421eb58c7c4258bf674a2a932c747f&pagesize=10`;
    const res = await fetch(url)
    const data = await res.json()
  
    // Pass data to the page via props
    return { props: { data } }
}
function Landing() {
    return (
        <div className='container mt-4'>
            <News/>
        </div>
    )
}

export default Landing
