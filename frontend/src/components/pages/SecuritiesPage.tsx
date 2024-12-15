import { useQuery } from "@apollo/client";
import { GET_SECURITIES } from "@/queries/securities";
import { Security } from "@/types/securities";
import { SecuritiesTable } from "@/components/features";
import { Alert, Button } from "@mui/material";
import { Refresh } from "@mui/icons-material";

type QueryData = {
  securities: Security[];
};

export const SecuritiesPage = () => {
  const { data, loading, error, refetch } = useQuery<QueryData>(GET_SECURITIES);

  const handleRetry = () => refetch();

  if (loading || !data) {
    return <SecuritiesTable loading />;
  }

  if (error) {
    return (
      <Alert
        sx={{ marginBottom: "1rem" }}
        severity="error"
        variant="filled"
        action={
          <Button
            onClick={handleRetry}
            startIcon={<Refresh />}
            aria-label="Retry fetching securities"
            color="inherit"
            size="small"
            variant="outlined"
          >
            Retry
          </Button>
        }
      >
        Something went wrong while fetching securities
      </Alert>
    );
  }

  return <SecuritiesTable securities={data.securities} />;
};
