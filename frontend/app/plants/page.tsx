'use client';

import { useQuery } from '@apollo/client/react';
import type { Plant } from './types';
import { GET_PLANTS } from './queries';
import BaseLayout from '../components/BaseLayout';

export default function PlantsPage() {
  const { loading, error, data } = useQuery<{ plants: Plant[] }>(GET_PLANTS);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error: {error.message}</p>;

  return (
    <BaseLayout>
      <h1 className="text-3xl font-bold mb-6">My Plants</h1>
      <ul className="space-y-4">
        {data?.plants.map((plant) => (
          <li key={plant.id} className="p-4 border rounded-lg shadow">
            <span className="font-semibold">{plant.name}</span>
            {plant.variety && <span className="text-600"> - {plant.variety}</span>}
            <span className="ml-2 text-sm bg-green-100 px-2 py-1 rounded">{plant.status}</span>
          </li>
        ))}
      </ul>
    </BaseLayout>
  );
}