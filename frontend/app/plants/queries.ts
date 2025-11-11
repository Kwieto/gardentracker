import { gql } from '@apollo/client';

export const GET_PLANTS = gql`
  query GetPlants {
    plants {
      id
      name
      variety
      plantingDate
      status
    }
  }
`;

export const GET_PLANT = gql`
  query GetPlant($id: ID!) {
    plantById(id: $id) {
      id
      name
      variety
      plantingDate
      status
    }
  }
`;

export const CREATE_PLANT = gql`
  mutation CreatePlant($input: PlantInput!) {
    createPlant(input: $input) {
      id
      name
      variety
      status
    }
  }
`;
