import React, {Component} from "react"
import UsersList from "./UsersList"; 

class Movie extends Component{
  render(){
	const {movieName, usersIds, users}=this.props;

    return(
                  <div>
                  <h2 key={movieName}>{movieName} </h2>				               
                   <UsersList usersIdsWhoLikedMovie={usersIds} users={users} />                           		
                  </div>
                );			

}
}

export default Movie