import * as Styles from "./DetailsPage.styles";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useHistory, useParams } from "react-router-dom";
import { Dispatch } from "store";
import services from "store/services";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";
import { IconButton, useMediaQuery } from "@material-ui/core";
import { Typography } from "@material-ui/core";
import { GridColDef } from "@material-ui/data-grid";
import { Skeleton } from "@material-ui/lab";
import { Grow } from "@material-ui/core";

const columns: GridColDef[] = [
  { field: "episode", headerName: "Episode", width: 110 },
  { field: "air_date", headerName: "Date", width: 170, sortable: false },
  { field: "name", headerName: "Name", width: 300 },
];

const DetailsPage = () => {
  const { id } = useParams<{ id: string }>();
  const history = useHistory();
  const dispatch = useDispatch<Dispatch>();
  const characterDetails = useSelector(services.selectors.characters.selectCharacterDetailsById(id));
  const matches = useMediaQuery("(max-width: 991px)");

  const goBack = () => {
    history.goBack();
  };

  useEffect(() => {
    dispatch(services.actions.characters.getCharacterDetails(id));

    window.scrollTo({
      top: 0,
      behavior: "auto",
    });
    // eslint-disable-next-line
  }, []);

  return (
    <Grow timeout={300} in={true} disableStrictModeCompat>
      <Styles.Container>
        <Styles.BackIconContainer>
          <IconButton onClick={goBack}>
            <ArrowBackIcon fontSize="large" />
          </IconButton>
        </Styles.BackIconContainer>
        {characterDetails ? (
          <Styles.Card elevation={12}>
            <Styles.AvatarAndDetailsContainer>
              <Styles.Avatar src={characterDetails.image} />
              <Styles.Details>
                <Styles.NameHeader>{characterDetails.name}</Styles.NameHeader>
                <Styles.Info>
                  <Styles.Header>Spieces</Styles.Header>
                  <Styles.Bold>{characterDetails.species}</Styles.Bold>
                </Styles.Info>
                <Styles.Info>
                  <Styles.Header>Gender</Styles.Header>
                  <Styles.Bold>{characterDetails.gender}</Styles.Bold>
                </Styles.Info>
                <Styles.Info>
                  <Styles.Header>Status</Styles.Header>
                  <Styles.Bold>{characterDetails.status}</Styles.Bold>
                </Styles.Info>
                <Styles.Info>
                  <Styles.Header>Current location</Styles.Header>
                  <Styles.Bold>{characterDetails.location.name}</Styles.Bold>
                </Styles.Info>
              </Styles.Details>
            </Styles.AvatarAndDetailsContainer>
            <Styles.EpisodesContainer>
              <Styles.Episodes
                columns={columns}
                headerHeight={40}
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
              <Styles.SkeletonAvatar variant="rect" />
              <Styles.Details>
                <Styles.SkeletonNameHeader />
                <Styles.Info>
                  <Typography>Spieces:</Typography>
                  <Styles.SkeletonBold width={130} />
                </Styles.Info>
                <Styles.Info>
                  <Typography>Gender:</Typography>
                  <Styles.SkeletonBold width={160} />
                </Styles.Info>
                <Styles.Info>
                  <Typography>Status:</Typography>
                  <Styles.SkeletonBold width={80} />
                </Styles.Info>
                <Styles.Info>
                  <Typography>Current location:</Typography>
                  <Styles.SkeletonBold width={250} />
                </Styles.Info>
              </Styles.Details>
            </Styles.AvatarAndDetailsContainer>
            <Styles.EpisodesContainer>
              {matches
                ? [...Array(5)].map((_, ind) => <Skeleton key={ind} height={60} />)
                : [...Array(10)].map((_, ind) => <Skeleton key={ind} height={60} />)}
            </Styles.EpisodesContainer>
          </Styles.Card>
        )}
      </Styles.Container>
    </Grow>
  );
};

export default DetailsPage;
