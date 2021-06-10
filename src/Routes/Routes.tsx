import { Suspense, lazy } from "react";
import { Route, Switch } from "react-router-dom";
import LoadingScreen from "components/LoadingScreen/LoadingScreen";
import { Typography } from "@material-ui/core";

const NotFound = () => <Typography align="center">404 Not Found</Typography>;

const Routes = () => {
  const HomePage = lazy(() => import("pages/HomePage"));
  const DetailsPage = lazy(() => import("pages/DetailsPage"));

  return (
    <Suspense fallback={<LoadingScreen />}>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route exact path="/details" component={DetailsPage} />
        <Route component={NotFound} />
      </Switch>
    </Suspense>
  );
};

export default Routes;
