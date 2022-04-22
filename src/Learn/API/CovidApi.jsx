import React from 'react';

const CovidApi = () => {
  const [covid,setCovid] = React.useState([]);

  const getData = async () => {
    const response = await fetch('https://api.covid19india.org/state_district_wise.json');
    const data = await response.json();
    setCovid(data);
    console.log(data);
  }
  return (
    <>
      <h1>Covid Tracker {covid}</h1>
      <button onClick={getData}>GetData</button>
    </>
  )
}

export default CovidApi;