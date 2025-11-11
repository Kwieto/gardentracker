
export default async function PlantPage({ params }: { params: Promise<{id: string}> }) {
  const { id } = await params;
  return <div>Plant ID: {id}</div>
}