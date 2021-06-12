import * as Styles from "./DetailsPage.styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Dispatch } from "store";
import services from "store/services";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { DataGrid, GridColDef } from "@material-ui/data-grid";
import { Skeleton } from "@material-ui/lab";

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const dispatch = useDispatch<Dispatch>();
  const characterDetails = useSelector(services.selectors.characters.selectCharacterDetailsById(id));

  useEffect(() => {
    dispatch(services.actions.characters.getCharacterDetails(id));
    // eslint-disable-next-line
  }, []);

  const goBack = () => {
    history.goBack();
  };

  const columns: GridColDef[] = [
    { field: "episode", headerName: "Episode", width: 120 },
    { field: "air_date", headerName: "Date", width: 170, sortable: false },
    { field: "name", headerName: "Name", flex: 1 },
  ];

  return (
    <Styles.Container>
      <Styles.IconContainer>
        <IconButton onClick={goBack}>
          <ArrowBackIcon fontSize="large" />
        </IconButton>
      </Styles.IconContainer>
      {characterDetails ? (
        <Styles.Card elevation={12}>
          <Styles.AvatarAndDetailsContainer>
            <Styles.Avatar src={characterDetails.image} />
            <Styles.Details>
              <Styles.Info>
                <Typography>Name:</Typography>
                <Styles.Bold>{characterDetails.name}</Styles.Bold>
              </Styles.Info>
              <Styles.Info>
                <Typography>Spieces:</Typography>
                <Styles.Bold>{characterDetails.species}</Styles.Bold>
              </Styles.Info>
              <Styles.Info>
                <Typography>Gender:</Typography>
                <Styles.Bold>{characterDetails.gender}</Styles.Bold>
              </Styles.Info>
              <Styles.Info>
                <Typography>Status:</Typography>
                <Styles.Bold>{characterDetails.status}</Styles.Bold>
              </Styles.Info>
              <Styles.Info>
                <Typography>Current location:</Typography>
                <Styles.Bold>{characterDetails.location.name}</Styles.Bold>
              </Styles.Info>
            </Styles.Details>
          </Styles.AvatarAndDetailsContainer>
          <Styles.EpisodesContainer>
            <Styles.Episodes
              columns={columns}
              rows={characterDetails.episode}
              disableColumnMenu
              disableColumnSelector
              disableDensitySelector
              disableSelectionOnClick
              hideFooter
            />
          </Styles.EpisodesContainer>
        </Styles.Card>
      ) : (
        <Styles.Card elevation={12}>
          <Styles.AvatarAndDetailsContainer>
            <Skeleton variant="rect" width={250} height={250} />
            <Styles.Details>
              <Styles.Info>
                <Typography>Name:</Typography>
                <Skeleton width={200} />
              </Styles.Info>
              <Styles.Info>
                <Typography>Spieces:</Typography>
                <Skeleton width={130} />
              </Styles.Info>
              <Styles.Info>
                <Typography>Gender:</Typography>
                <Skeleton width={160} />
              </Styles.Info>
              <Styles.Info>
                <Typography>Status:</Typography>
                <Skeleton width={80} />
              </Styles.Info>
              <Styles.Info>
                <Typography>Current location:</Typography>
                <Skeleton width={250} />
              </Styles.Info>
            </Styles.Details>
          </Styles.AvatarAndDetailsContainer>
          <Styles.EpisodesContainer>
            <Skeleton height={60} />
            <Skeleton height={60} />
            <Skeleton height={60} />
            <Skeleton height={60} />
          </Styles.EpisodesContainer>
        </Styles.Card>
      )}
    </Styles.Container>
  );
};

export default DetailsPage;
