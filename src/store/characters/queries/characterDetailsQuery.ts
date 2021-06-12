import { gql } from "graphql-request";

export const characterDetailsQuery = gql`
  query getCharacterDetails($id: ID!) {
    character(id: $id) {
      id
      image
      name
      gender
      species
      location {
        name
      }
      status
      episode {
        id
        name
        episode
        air_date
      }
    }
  }
`;

export const characterDetailsVariables = (id: string) => ({
  id: id,
});
