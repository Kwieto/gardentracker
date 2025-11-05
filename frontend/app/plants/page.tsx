'use client';

import {useQuery} from '@apollo/client/react';
import type {Plant} from './types';
import {GET_PLANTS} from './queries';
import Table from "@/app/components/shared/Table";

export default function PlantsPage() {
  const {loading, error, data} = useQuery<{ plants: Plant[] }>(GET_PLANTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;
  if (!data) return <p>No data</p>;

  const plants = data.plants.map(plant => ({
    id: plant.id,
    name: plant.name,
    variety: plant.variety,
    status: plant.status,
    plantingDate: plant.plantingDate,
  }));

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">My Plants</h1>
      <Table headers={["ID", "Name", "Variety", "Status", "Planting Date"]} data={plants}/>
    </div>
  );
}