import { Paper, Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const IconContainer = styled.div`
  width: 800px;
`;

export const Card = styled(Paper)`
  display: flex;
  flex-direction: column;
  width: 800px;
  height: 500px;
  border-radius: 12px;
  margin-top: 8px;
`;

export const Avatar = styled.img`
  width: 250px;
  height: 250px;
  border-top-left-radius: 12px;
`;

export const Details = styled.div`
  display: flex;
  flex: 1;
  flex-direction: column;
`;

export const Info = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 12px;
  border-bottom: 1px solid #ccc;
`;

export const Bold = styled(Typography)`
  font-weight: bold;
`;

export const AvatarAndDetailsContainer = styled.div`
  display: flex;
`;

export const EpisodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  padding-bottom: 8px;
`;

export const Episodes = styled(DataGrid)`
  & .MuiDataGrid-cell:focus {
    outline: none;
  }

  & .MuiDataGrid-columnHeader:focus-within {
    outline: none;
  }

  & .MuiDataGrid-columnHeader:focus {
    outline: none;
  }

  & .MuiDataGrid-columnHeaderSortable:focus {
    outline: none;
  }

  & .MuiDataGrid-columnHeaderSorted:focus {
    outline: none;
  }
`;
