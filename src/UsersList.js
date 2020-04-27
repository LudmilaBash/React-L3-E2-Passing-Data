import React, { Component } from "react";

class UsersList extends Component{

render(){
	const { users, usersIdsWhoLikedMovie } = this.props;

      if(!usersIdsWhoLikedMovie|| usersIdsWhoLikedMovie.length===0)
      {return <p>None of the current users liked this movie</p>;}
       
        const ListofUsers=usersIdsWhoLikedMovie.map(userID=>(
          <li key={userID}>{users[userID].name}</li>
        ));
                                                     
      
        return(<div>
              <h3>Liked By:</h3>
              <ul>{ListofUsers}</ul>}
              </div>);

    }
}

export default UsersList;