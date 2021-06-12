import { MEDIA_QUERIES } from "shared/mediaQueries";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  padding: 24px;
  ${MEDIA_QUERIES.md} {
    padding: 16px 0;
  }
`;

export const Cards = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 1300px;
  margin-bottom: 40px;
`;
