import { Paper, Typography, Tooltip } from "@material-ui/core";
import styled from "styled-components";

export const Container = styled.div`
  transition: transform 0.2s;
  &:hover {
    transform: scale(1.2);
  }
`;

export const Card = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 200px;
  height: 320px;
  margin: 24px;
  border-radius: 8px;
`;

export const Avatar = styled.img`
  width: 200px;
  height: 200px;
  border-top-left-radius: 8px;
  border-top-right-radius: 8px;
`;

export const Info = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
  justify-content: space-between;
  padding: 10px;
`;

export const Bold = styled(Typography)`
  font-weight: bold;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
`;

export const CharacterTooltip = styled(({ className, ...props }) => (
  <Tooltip enterNextDelay={500} arrow {...props} classes={{ popper: className }} />
))`
  & .MuiTooltip-tooltip {
    font-size: 16px;
  }
`;
