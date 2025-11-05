'use client';

import {useRouter} from 'next/navigation';
import {useMutation} from '@apollo/client/react';
import {useState} from 'react';

import {CREATE_PLANT, GET_PLANTS} from '../queries';
import Button from "@/app/components/shared/Button";
import Input from "@/app/components/shared/Input";

export default function AddPlantPage() {
  const router = useRouter();
  const [formData, setFormData] = useState({
    name: '',
    variety: '',
    plantingDate: '',
  });

  const handleChange = (field: keyof typeof formData) => (e: React.ChangeEvent<HTMLInputElement>) => {
    setFormData(prev => ({...prev, [field]: e.target.value}));
  };

  const [createPlant, {loading, error}] = useMutation(CREATE_PLANT, {
    refetchQueries: [{query: GET_PLANTS}],
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    const result = await createPlant({
      variables: {
        input: {
          ...formData,
          variety: formData.variety || null,
          status: 'PLANTED',
        },
      },
    });

    if (!result.error) {
      router.push('/plants');
    }
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Add Plant</h1>
      <form className="w-full max-w-sm" onSubmit={handleSubmit}>
        <Input
          labelText="Name"
          value={formData.name}
          onChange={handleChange('name')}
        />
        <Input
          labelText="Variety"
          value={formData.variety}
          onChange={handleChange('variety')}
        />
        <Input
          type="date"
          labelText="Planting Date"
          value={formData.plantingDate}
          onChange={handleChange('plantingDate')}
        />
        <Button>{loading ? 'Adding...' : 'Add Plant'}</Button>
        {error && <p className="text-red-600 mt-2">Error: {error.message}</p>}
      </form>
    </div>
  );
}