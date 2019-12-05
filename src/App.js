import React from 'react';
import axios from 'axios';
import Movie from './Movie';

class App extends React.Component{
    state={
        isLoading: true,
        movies:[]
    }
    getMovies= async ()=>{
        const {
            data:{
                data: {movies}
        }}= await axios.get("https://yts-proxy.now.sh/list_movies.json?sort_by=rating");
        console.log(movies);
        this.setState({movies, isLoading:false}); //{movies:movies}
    }
    componentDidMount() { //data fetch
        this.getMovies();
    }

    render(){
        const {isLoading, movies}=this.state;
        return(
            <div>
                <h1>{isLoading ? 'loading': movies.map(movie=>{
                    console.log(movie)
                    return <Movie id={movie.id} year={movie.year} title={movie.title} summary={movie.summary} poster={movie.medium_cover_images}/>
                })}</h1>
            </div>
        )
    }
}

export default App;
