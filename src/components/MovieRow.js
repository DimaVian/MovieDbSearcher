import React from 'react';
import './App.css'
class MovieRow extends React.Component {

    viewMovie(){
        const url = "http://www.themoviedb.org/movie/" + this.props.movie.id
        window.location.href = url

        
    }

    render() {
        return <table key={this.props.movie.id}>
        <tbody className='movieBody'>  
          <tr className='Movie' onClick={this.viewMovie.bind(this)}>
            <td>
              <img className='movieImage' alt="poster"width="220" src={this.props.movie.poster_src}/>
            </td>
            <td>
              <h1 className='movieTitle'>{this.props.movie.title}</h1>
              <h3 className='movieOverview'><p>{this.props.movie.overview}</p></h3>
              {/* <input type="button" className='viewButton' onClick={this.viewMovie.bind(this)} value="View"/> */}
            </td>
          </tr>
        </tbody>
      </table>
    }
}

export default MovieRow