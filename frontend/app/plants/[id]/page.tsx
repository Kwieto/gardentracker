'use client'

import { useQuery } from "@apollo/client/react";
import { GET_PLANT } from "../queries";
import { Plant } from "../types";
import React from "react";

export default function PlantPage({ params }: { params: Promise<{id: string}> }) {
  const { id } = React.use(params);
  const {loading, error, data} = useQuery<{ plant: Plant }>(GET_PLANT, {
    variables: {
      id
    }
  });

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data</p>;


  console.log({
    loading,
    error,
    data
  });


  return <div>Plant ID: {id}</div>
}