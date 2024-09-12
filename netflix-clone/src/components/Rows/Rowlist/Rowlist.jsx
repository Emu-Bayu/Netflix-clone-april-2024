import React from 'react'
import Row from '../Row/Row'
import request from '../../../Utils/Request'
const Rowlist=()=> {

  return (
    <>
    <Row 
    title="NETFLIX ORIGINALS"
    fetchUrl={request.fetchnetflixorginals}
    isLargeRow={true}
/>
<Row 
    title="TOP RATED MOVIES"
    fetchUrl={request. fetchTopRatedMovies}
  
    />
<Row 
    title="TRANDING NOW"
    fetchUrl={request. fetchtranding}
    
    />

<Row 
    title="COMEDY MOVIES"
    fetchUrl={request. fetchcomedymovies}
   
    />
<Row 
    title="ACTION MOVIES"
    fetchUrl={request. fetchactionmovies}
    
    />
<Row 
    title="ROMANCE MOVIES"
    fetchUrl={request. fetchromancemovies}
   
    />



    </>
  )
}

export default Rowlist