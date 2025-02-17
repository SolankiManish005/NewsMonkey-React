import React, { Component } from 'react'
import NewsItem from './NewsItem'
import Spinner from './Spinner'
import PropTypes from 'prop-types'

export class News extends Component {
  // articles = [
  //     {
  //       "source": {
  //         "id": "abc-news-au",
  //         "name": "ABC News (AU)"
  //       },
  //       "author": "ABC News",
  //       "title": "Spirit of cricket debate rages again as England's Tom Curran is caught out of his crease in ILT20",
  //       "description": "The romantic idea of the spirit of cricket is called into question again as Tom Curran is deemed run out before being sent back in.",
  //       "url": "https://www.abc.net.au/news/2025-01-26/spirit-of-cricket-questioned-as-tom-curran-caught-out-in-ilt20/104861230",
  //       "urlToImage": "https://live-production.wcms.abc-cdn.net.au/b7015271585afd01f6a3134cffd0b864?impolicy=wcms_watermark_news&cropH=1093&cropW=1943&xPos=30&yPos=0&width=862&height=485&imformat=generic",
  //       "publishedAt": "2025-01-26T02:39:48Z",
  //       "content": "Debate about the symbolic spirit of cricket is raging again after bizarre scenes in the International League T20 in Abu Dhabi overnight.\r\nIn an incident reminiscent of Johnny Bairstow wandering out o… [+1881 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "espn-cric-info",
  //         "name": "ESPN Cric Info"
  //       },
  //       "author": null,
  //       "title": "PCB hands Umar Akmal three-year ban from all cricket | ESPNcricinfo.com",
  //       "description": "Penalty after the batsman pleaded guilty to not reporting corrupt approaches | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/29103103/pcb-hands-umar-akmal-three-year-ban-all-cricket",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1099495_800x450.jpg",
  //       "publishedAt": "2020-04-27T11:41:47Z",
  //       "content": "Umar Akmal's troubled cricket career has hit its biggest roadblock yet, with the PCB handing him a ban from all representative cricket for three years after he pleaded guilty of failing to report det… [+1506 chars]"
  //     },
  //     {
  //       "source": {
  //         "id": "espn-cric-info",
  //         "name": "ESPN Cric Info"
  //       },
  //       "author": null,
  //       "title": "What we learned from watching the 1992 World Cup final in full again | ESPNcricinfo.com",
  //       "description": "Wides, lbw calls, swing - plenty of things were different in white-ball cricket back then | ESPNcricinfo.com",
  //       "url": "http://www.espncricinfo.com/story/_/id/28970907/learned-watching-1992-world-cup-final-full-again",
  //       "urlToImage": "https://a4.espncdn.com/combiner/i?img=%2Fi%2Fcricket%2Fcricinfo%2F1219926_1296x729.jpg",
  //       "publishedAt": "2020-03-30T15:26:05Z",
  //       "content": "Last week, we at ESPNcricinfo did something we have been thinking of doing for eight years now: pretend-live ball-by-ball commentary for a classic cricket match. We knew the result, yes, but we tried… [+6823 chars]"
  //     }
  //   ]

  static defaultProps = { 
    country: 'in',
    pageSize: 8,
    category: 'general'
  }

  static propTypes = {
    country: PropTypes.string,
    pageSize: PropTypes.number,
    category: PropTypes.string
  }

  constructor() {
    super();
    // console.log('Hello, I am a constructor from NewsItem component');
    this.state = {
      articles: [],
      loading: false,
      page: 1
    }
  }

  async updateNews(){
    // console.log('Update News');
    let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c44028f3e21d4c68bed0eb71582cdb1d&page=${this.state.page}&pageSize=${this.props.pageSize}`;
    {this.state.pageSize};
    this.setState({loading: true});
    let data = await fetch(url);
    let parsedData = await data.json();
    // console.log(parsedData);
    this.setState({
      articles: parsedData.articles, 
      totalResults: parsedData.totalResults,
      loading: false
    });
  }

  async componentDidMount(){
    // console.log('Component Did Mount');
    // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c44028f3e21d4c68bed0eb71582cdb1d&page=1&pageSize=${this.props.pageSize}`;
    // {this.state.pageSize};
    // this.setState({loading: true});
    // let data = await fetch(url);
    // let parsedData = await data.json();
    // // console.log(parsedData);
    // this.setState({
    //   articles: parsedData.articles, 
    //   totalResults: parsedData.totalResults,
    //   loading: false
    // });
    this.updateNews();
  }

  handlePrevClick = async ()=>{
      // console.log('Previous');
      // let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c44028f3e21d4c68bed0eb71582cdb1d&page=${this.state.page-1}&pageSize=${this.props.pageSize}`;
      // {this.state.pageSize}
      // this.setState({loading: true});
      // let data = await fetch(url);
      // let parsedData = await data.json();
      // // console.log(parsedData);
      // this.setState({
      //   page: this.state.page-1,
      //   articles: parsedData.articles,
      //   loading: false
      // });
      this.setState({page: this.state.page-1});
      this.updateNews();
  }

  handleNextClick = async ()=>{
    // console.log('Next');
    // if(!(this.state.page + 1 > Math.ceil(this.state.totalResults/this.props.pageSize))){
    //     let url = `https://newsapi.org/v2/top-headlines?country=${this.props.country}&category=${this.props.category}&apiKey=c44028f3e21d4c68bed0eb71582cdb1d&page=${this.state.page+1}&pageSize=${this.props.pageSize}`;
    //     {this.state.pageSize}
    //     this.setState({loading: true}); 
    //     let data = await fetch(url);
    //     let parsedData = await data.json();
    //     // console.log(parsedData);
    //     this.setState({
    //       page: this.state.page+1,
    //       articles: parsedData.articles,
    //       loading: false
    //     });
    //   }
    this.setState({page: this.state.page+1});
    this.updateNews();
  }

  render() {
    // console.log('Hello, I am a render');
    return (
      <div className='container my-3'>
            <h1 className='text-center' style={{margin:'35px 0'}}>NewsMonkey - Top Headlines</h1>
            {this.state.loading && <Spinner/>}
            <div className="row">
              {!this.state.loading && this.state.articles.map((element)=>{
                  return <div className="col-md-4" key={element.url}>
                      {/* <NewsItem title={element.title?element.title.slice(0,45):" "} description={element.description?element.description.slice(0,88):" "} imageUrl={element.urlToImage} newsUrl={element.url}/> */}
                      <NewsItem title={element.title?element.title:" "} description={element.description?element.description:" "} imageUrl={element.urlToImage} newsUrl={element.url} author={element.author} date={element.publishedAt} source={element.source.name}/>
                  </div>
              })}
            </div>
            <div className="container d-flex justify-content-between">
                <button disabled={this.state.page<=1} type="button" className="btn btn-dark" onClick={this.handlePrevClick}>&larr;Previous</button>
                <button disabled={this.state.page + 1 > Math.ceil(this.state.totalResults / this.props.pageSize)} type="button" className="btn btn-dark" onClick={this.handleNextClick}>Next&rarr;</button>  
            </div>           
      </div>
    )
  }
}

export default News
