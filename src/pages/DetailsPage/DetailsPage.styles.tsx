import { Paper, Typography } from "@material-ui/core";
import { DataGrid } from "@material-ui/data-grid";
import { Skeleton } from "@material-ui/lab";
import { MEDIA_QUERIES } from "shared/mediaQueries";
import styled, { css } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const BackIconContainer = styled.div`
  width: 1024px;

  ${MEDIA_QUERIES.xl} {
    width: 900px;
  }

  ${MEDIA_QUERIES.lg} {
    width: 600px;
  }

  ${MEDIA_QUERIES.md} {
    width: 300px;
  }
`;

export const Card = styled(Paper)`
  display: flex;
  width: 1024px;
  height: 600px;
  border-radius: 12px;
  margin: 8px 0;

  ${MEDIA_QUERIES.xl} {
    width: 900px;
    height: 550px;
  }

  ${MEDIA_QUERIES.lg} {
    width: 600px;
    flex-direction: column;
  }

  ${MEDIA_QUERIES.md} {
    width: 300px;
    height: 750px;
  }
`;

const avatarStyles = css`
  width: 350px;
  height: 350px;
  border-top-left-radius: 12px;

  ${MEDIA_QUERIES.xl} {
    width: 300px;
    height: 300px;
  }

  ${MEDIA_QUERIES.lg} {
    width: 250px;
    height: 250px;
  }

  ${MEDIA_QUERIES.md} {
    width: 300px;
    height: 300px;
    border-top-right-radius: 12px;
  }
`;

export const Avatar = styled.img`
  ${avatarStyles}
`;

export const Details = styled.div`
  display: flex;
  width: 350px;
  flex: 1;
  flex-direction: column;
  justify-content: space-evenly;
  padding-bottom: 16px;

  ${MEDIA_QUERIES.xl} {
    width: 300px;
  }
`;

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 12px;
`;

export const Bold = styled(Typography)`
  font-weight: bold;
  font-size: 18px;

  ${MEDIA_QUERIES.xl} {
    font-size: 16px;
  }
`;

export const Header = styled(Typography)`
  ${MEDIA_QUERIES.xl} {
    font-size: 14px;
  }
`;

export const NameHeader = styled(Bold)`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  padding: 0px 8px;
  font-size: 24px;

  ${MEDIA_QUERIES.xl} {
    font-size: 20px;
  }
`;

export const AvatarAndDetailsContainer = styled.div`
  display: flex;
  flex-direction: column;

  ${MEDIA_QUERIES.lg} {
    flex-direction: row;
  }

  ${MEDIA_QUERIES.md} {
    flex-direction: column;
  }
`;

export const EpisodesContainer = styled.div`
  display: flex;
  flex-direction: column;
  flex: 1;
  overflow-x: auto;
`;

export const Episodes = styled(DataGrid)`
  border-top-right-radius: 12px;
  border-bottom-right-radius: 12px;

  ${MEDIA_QUERIES.lg} {
    border-top-right-radius: 0px;
    border-bottom-left-radius: 12px;
  }

  overflow-x: hidden;

  & .MuiDataGrid-cell:focus,
  & .MuiDataGrid-columnHeader:focus-within,
  & .MuiDataGrid-columnHeader:focus,
  & .MuiDataGrid-columnHeaderSortable:focus & .MuiDataGrid-columnHeaderSorted:focus {
    outline: none;
  }

  & .MuiDataGrid-cell {
    overflow-x: auto;
  }

  & .MuiDataGrid-window {
    overflow-x: hidden;

    ${MEDIA_QUERIES.md} {
      overflow-x: auto;
    }
  }
`;

export const SkeletonAvatar = styled(Skeleton)`
  ${avatarStyles}
`;

export const SkeletonBold = styled(Skeleton)`
  height: 20px;
`;

export const SkeletonNameHeader = styled(Skeleton)`
  align-self: center;
  width: 200px;
  height: 30px;
`;
