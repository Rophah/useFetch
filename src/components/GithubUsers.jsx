import { useState, useEffect } from "react";
import useFetch from "./useFetch";

const url = "https://api.github.com/users";

const GithubUsers = () => {
  
  const {users, loading, error, getUser} = useFetch(url);
  return (
    <div className="--bg-primary --py2">
      <div className="container">
        <header>
          <h1 className="--text-center --text-light">GitHub Users</h1>
          <div className="--line"></div>
        </header>

        <div className="--grid-25 --py">
        {loading && <p className="--text-light --text-center">Loading...</p> }

        {error ? (<h4 className="--text-light --text-center">Something went wrong</h4>): (users.map(function(user){
            const {id, login, avatar_url, html_url} = user;
            return (
              <div key= {id} className="--card --bg-light --p --flex-start">
                <img src={avatar_url} alt="image" className="--profile-img --mx" />
                <span>
                  <h4>{login}</h4>
                  <a href={html_url} onClick={getUser}>View Profile</a>
                </span>
            
              </div>
            )
          }))
          }
          
        </div>
      </div>
    </div>
  );
};

export default GithubUsers;
