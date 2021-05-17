import React, { useState, useEffect } from 'react';
import axios from 'axios';

import { Route, Link, Switch } from 'react-router-dom'

import SavedList from './Movies/SavedList';
import MovieList from './Movies/MovieList';

export default function App () {
  const [saved, setSaved] = useState([]); // Stretch: the ids of "saved" movies
  const [movieList, setMovieList] = useState([]);

  useEffect(() => {
    const getMovies = () => {
      axios
        .get('http://localhost:5000/api/movies') // Study this endpoint with Postman
        .then(response => setMovieList(response.data))
    }
    getMovies();


          // Study this response with a breakpoint or log statements TRIED!!
          // and set the response data as the 'movieList' slice of state
        })
        .catch(error => {
          console.error('Server Error', error);
        });

    }
   

  const addToSavedList = id => {
    // This is stretch. Prevent the same movie from being "saved" more than once
  };
 return (
    <div>
      <SavedList list={[ /* This is stretch */]} />

      <div>Replace this Div with your Routes</div>
      <Switch>
        <Route path='/' component={MovieList} />
      </Switch>
    </div>
  );

