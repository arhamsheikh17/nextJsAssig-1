'use client';
import { countries } from '@/app/data/country';
import React from 'react';

interface CountryDetailsProps {
  params: {
    country_Name: string;
  };
}

export default function CountryDetails({ params }: CountryDetailsProps) {
  const countryName = params.country_Name;
  const country = countries.find((c) => c.name.toLowerCase() === countryName.toLowerCase());

  if (!country) {
    return <div>Country not found</div>;
  }

  return (
    <div>
      <h1>Country Details</h1>
      <h2>{country.name}</h2>
      <h2>{country.population}</h2>
      <h2>{country.capital}</h2>
    </div>
  );
}
