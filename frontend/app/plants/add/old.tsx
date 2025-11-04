'use client';

import { useRouter } from 'next/navigation';
import { useMutation } from '@apollo/client/react';
import { useState } from 'react';

import { CREATE_PLANT, GET_PLANTS } from '../queries';

export default function AddPlantPage() {
  const router = useRouter();
  const [name, setName] = useState('');
  const [variety, setVariety] = useState('');
  const [plantingDate, setPlantingDate] = useState('');
  
  const [createPlant, { loading, error }] = useMutation(CREATE_PLANT, {
    refetchQueries: [{ query: GET_PLANTS }],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    await createPlant({
      variables: {
        input: {
          name,
          variety: variety || null,
          plantingDate,
          status: 'PLANTED',
        },
      },
    });
    
    router.push('/plants');
  };

  return (
    <BaseLayout>
      <h1 className="text-3xl font-bold mb-6">Add Plant</h1>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="name">
              Name
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="name" name="name" type="text" value={name} onChange={(e) => setName(e.target.value)} required/>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="variety">
              Variety
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="variety" name="variety" type="text" value={variety} onChange={(e) => setVariety(e.target.value)}/>
          </div>
        </div>

        <div className="md:flex md:items-center mb-6">
          <div className="md:w-1/3">
            <label className="block text-gray-500 font-bold md:text-right mb-1 md:mb-0 pr-4" htmlFor="plantingDate">
              Planting Date
            </label>
          </div>
          <div className="md:w-2/3">
            <input className="bg-gray-200 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-purple-500" id="plantingDate" name="plantingDate" type="date" value={plantingDate} onChange={(e) => setPlantingDate(e.target.value)}/>
          </div>
        </div>

        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit" disabled={loading}>
          {loading ? 'Adding...' : 'Add Plant'}
        </button>
        {error && <p>Error: {error.message}</p>}
      </form>
    </BaseLayout>
  );
}