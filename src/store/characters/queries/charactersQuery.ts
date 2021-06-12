import { gql } from "graphql-request";

export const charactersQuery = gql`
  query getCharacters($page: Int) {
    characters(page: $page) {
      info {
        count
        pages
      }
      results {
        id
        image
        name
        species
      }
    }
  }
`;

export const charactersVariables = (page: number) => ({
  page: page,
});
