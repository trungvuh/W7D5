import React from 'react';
import Link from 'react-router-dom';


const BenchIndexItem = ({ bench }) => (
  <li className="bench_index_item"> Bench {bench.id}:
    <ul>
      <li>Name: {bench.description}</li>
      <li>Latitude: {bench.lat}</li>
      <li>Longtitude: {bench.lng}</li>
    </ul>
  </li>
);

export default BenchIndexItem;
