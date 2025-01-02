import React from 'react'
import NewsItem from './NewsIist';
class News extends React.Component{
   handelNextBtn=async()=>{
    console.log("Next");
    if(this.state.page+1>Math.ceil(this.state.totalResults/20))
      {
       
        this.state.nextBtnState=false;
        alert("You already read all headlines",this.state.nextBtnState);
      }
    else
      {

    
            let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=1baf86ffcfc1430c9e23965760636360&page=${this.state.page+1}&pagesize=20`;
            let data= await fetch(url);
            let parsedData= await data.json();
            this.setState({
              page:this.state.page+1,
              articles:parsedData.articles});
            
            console.log(parsedData);
      }
  }
  handelPrevBtn=async()=>{
    console.log("Previous");
    let url=`https://newsapi.org/v2/top-headlines?country=us&apiKey=1baf86ffcfc1430c9e23965760636360&page=${this.state.page-1}&pagesize=20`;
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({
      page:this.state.page-1,
      articles:parsedData.articles});
    
    console.log(parsedData);
  }
  constructor(){
    super();
    console.log("Im constructor from News.js");
    this.state={
      articles: [],
     loading: false ,// i will use it to show a spiner when news loads 
     page:1
    }
  }
 async componentDidMount(){
    let url="https://newsapi.org/v2/top-headlines?country=us&apiKey=1baf86ffcfc1430c9e23965760636360&page=1&pagesize=20";
    let data= await fetch(url);
    let parsedData= await data.json();
    this.setState({articles:parsedData.articles,totalResults:parsedData.totalResults});
    console.log(parsedData);
  }
  
  render(){
    return(
      <>
      <div className="container my-3">
         <h1 >Top Headlined</h1>
       
            <div className="row">
                
              {this.state.articles.map((val)=>{
              // console.log(val);
              return <div className="col-12 col-md-4 my-3" key={val.url?val.url:""}> 
              <NewsItem  title={val.title?val.title.slice(0,45):""} description={val.description?val.description.slice(0,80):""} imgUrl={val.urlToImage?val.urlToImage:"https://cdn.vox-cdn.com/thumbor/75OplhMU4gH4f0GQd63PwfAT3k8=/0x0:1772x1182/1200x628/filters:focal(886x591:887x592)/cdn.vox-cdn.com/uploads/chorus_asset/file/25810931/lggram1.jpg"} newsUrl={val.url?val.url:""} />
              </div> 
              })}
            </div>
            <div className="container d-flex justify-content-between">
            <button type="button" disabled={this.state.page<=1} className="btn btn-success" onClick={this.handelPrevBtn}>&larr;Previous</button>

            <button type="button" disabled={this.state.page+1>Math.ceil(this.state.totalResults/20)}   className="btn btn-success"onClick={this.handelNextBtn}>Next&rarr;</button>
            </div>
     </div>  
    
      </>
    );
  }
}
export default News