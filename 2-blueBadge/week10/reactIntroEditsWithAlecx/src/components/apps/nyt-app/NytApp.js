import React, { useState, useEffect } from 'react';
import NytResults from './NytResults';

const baseURL = 'https://api.nytimes.com/svc/search/v2/articlesearch.json';
const key = 'JFox9szawWel2pHoeW0CCH67QG9fnKai';

const NytApp = () => {
  const [ search, setSearch ] = useState(''); //['', function(){...}]
  const [ startDate, setStartDate ] = useState(''); //['', function(){...}]
  const [ endDate, setEndDate ] = useState(''); //['', function(){...}]
  const [ pageNumber, setPageNumber ] = useState(); //[0, function(){...}]
  const [ results, setResults ] = useState([]); //[[], function(){...}]

  const fetchResults = () => {
    let url = `${baseURL}?api-key=${key}&page=${pageNumber}&q=${search}`;
    url = startDate ? url + `&begin_date=${startDate}` : url;
    url = endDate ? url + `&end_date=${endDate}` : url;

    console.log(pageNumber);
    fetch(url)
      .then(res => res.json())
      .then(data => setResults(data.response.docs))
      .catch(err => console.log(err));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    setPageNumber(0);
  };

  const changePageNumber = async (event, direction) => {
    event.preventDefault();

    if(direction === 'down') {
      if(pageNumber > 0) {
        setPageNumber(pageNumber - 1);
      }
    }

    if(direction === 'up') {
      setPageNumber(pageNumber + 1);
    }
  };

  useEffect(() => {
    fetchResults();
  }, [pageNumber])

  return (
    <div className="main">
      <div className="mainDiv">
        <form onSubmit={(e) => handleSubmit(e)}>
          <span>Enter a single search term (required) : </span>
          <input type="text" name="search" onChange={(e) => setSearch(e.target.value)} required />
          <br />
          <span>Enter a start date: </span>
          <input type="date" name="startDate" pattern="[0-9]{8}" onChange={(e) => setStartDate(e.target.value)} />
          <br />
          <span>Enter an end date: </span>
          <input type="date" name="endDate" pattern="[0-9]{8}" onChange={(e) => setEndDate(e.target.value)} />
          <br />
          <button className="submit">Submit search</button>
        </form>

      {
        results.length > 0 ? <NytResults results={ results } changePageNumber={ changePageNumber } /> : null 
      }

      </div>
    </div>
  );
};

export default NytApp;