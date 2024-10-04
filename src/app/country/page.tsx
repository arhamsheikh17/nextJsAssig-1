import React from 'react'
import { countries } from '../data/country'
import Link from 'next/link'

export default function countryList() {
  return (
    <div>
      <h1>Country list</h1>
      <ul>
       {countries.map((val)=>(
        <li key={val.name}>
          <Link href={`/country/${val.name.toLowerCase()}`}>{val.name}</Link>
        </li>
       ))}
      </ul>
    </div>
    
  )
}
