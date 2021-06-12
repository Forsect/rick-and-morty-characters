import { gql } from "graphql-request";

export const charactersQuery = gql`
  query getCharacters($page: Int, $name: String) {
    characters(page: $page, filter: { name: $name }) {
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

export const charactersVariables = (page: number, name: string) => ({
  page: page,
  name: name,
});
