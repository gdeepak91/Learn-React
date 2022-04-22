import React from 'react'

const NewsApi = () => {
  const [news,setNews] = React.useState([]);

  const getNews = async () => {
    const response = await fetch('https://newsapi.org/v2/top-headlines?country=in&pageSize=10&apiKey=9b496050f845467abf94ae79f016212c');
    const data = await response.json();
    setNews(data.articles);
  }
  const style = {
    width : "29rem",
    height : "40rem"
  }
  return (
    <>
      {news.map((data)=>
      <div key={data.source.id} style={style}>  
        <h2 style={{color:"blue"}}>{data.title}</h2>
        <img src={data.urlToImage} alt="" height={300} width={450}/>
        <p>{data.content} <br /> {data.description}</p>
        <span>{data.publishedAt}</span><br /><br />
        <a href={data.url}><button>Read More ..</button></a>
        <hr />
      </div>
        )
      }
      
      <button onClick={getNews}>News</button>
      {/* <button onClick={getNews}>Technology</button>
      <button onClick={getNews}>Science</button>
      <button onClick={getNews}>Economy</button>
      <button onClick={getNews}>Business</button>
      <button onClick={getNews}>Sports</button>
      <button onClick={getNews}>Health</button>
      <button onClick={getNews}>Entertainment</button>
      <button onClick={getNews}>General</button>  */}
    </>
  )
}

export default NewsApi;