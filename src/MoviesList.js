import React, {Component} from "react"
import Movie from "./Movie";

class MoviesList extends Component{  
  
  render(){
   const {movies, moviesLikedByUsers, users}=this.props; 
   return(
   
        Object.keys(movies).map(movieID=>
        {
          const movieName=movies[movieID].name;
          const usersIds=moviesLikedByUsers[movies[movieID].id];
            
		  return(                                  
				 <Movie movieName={movieName} users={users} usersIds={usersIds}   />              
                );			
        })
    
       );
  }
}

export default MoviesList