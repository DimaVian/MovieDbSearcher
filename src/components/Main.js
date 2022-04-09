import { Component } from 'react';
import { render } from 'react-dom';
import './App.css';
import Background from './Background.jpg'
import MovieRow from './MovieRow';
import $ from "jquery"

class Main extends Component {

  constructor(props){
    super(props)

    this.state={}
    
    // const movies = [
    //   {id:0,poster_src:"https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_.jpg",title:'Avengers Infinity War',overview:'The Avengers and their allies must be willing to sacrifice all in an attempt to defeat the powerful Thanos before his blitz of devastation and ruin puts an end to the universe.'},
    //   {id:1,poster_src:"https://m.media-amazon.com/images/M/MV5BNDYxNjQyMjAtNTdiOS00NGYwLWFmNTAtNThmYjU5ZGI2YTI1XkEyXkFqcGdeQXVyMTMxODk2OTU@._V1_.jpg",title:"The Avengers",overview:"Earth's mightiest heroes must come together and learn to fight as a team if they are going to stop the mischievous Loki and his alien army from enslaving humanity."}
    // ]

    // var movieRows = []
    // movies.forEach((movie) => {
    //   const movieRow = <MovieRow movie={movie} />
    //   movieRows.push(movieRow)
    // })
    //  this.state = {rows:movieRows}

    this.performSearch("ant man")
  }

  performSearch(searchTerm){
    console.log('Perform search using moviedb')
    const urlString="https://api.themoviedb.org/3/search/movie?api_key=1b5adf76a72a13bad99b8fc0c68cb085&query=" + searchTerm
    $.ajax({
      url:urlString,
      success: (searchResults) => {
        console.log("Fetched data successfully")
        const results = searchResults.results

        var movieRows=[]

        results.forEach((movie) =>{
          movie.poster_src = "https://image.tmdb.org/t/p/w185" + movie.poster_path
          const movieRow = <MovieRow key={movie.id} movie={movie}/>
          movieRows.push(movieRow)
        })

        this.setState({rows :movieRows})
      },
      error:(xhr, status ,err) =>{
        console.log("Failed to fetch data")
      }
    })
  }

  searchChangeHandler(event){
    const boundObject = this
    const searchTerm = event.target.value
    this.performSearch(searchTerm)
  }

  render(){
  return (
    <div className="MainApp" >
      <div className='App'>
      <header className="App-header">
       <p className='Title'>MovieDb Searcher</p>
       <input onChange={this.searchChangeHandler.bind(this)} placeholder='Search for the film' className='Input'/>
      </header>
      </div>
      <div className='App-body'>
        {this.state.rows}
      </div>
    </div>
  );
  }
}

export default Main;