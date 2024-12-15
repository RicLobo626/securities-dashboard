import { Security } from "@/types/securities";
import { TableBodyLoader } from "@/components/ui/TableBodyLoader";
import { getTrendColor, getPercentage } from "@/utils";
import Paper from "@mui/material/Paper";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Table from "@mui/material/Table";
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell, { TableCellProps } from "@mui/material/TableCell";

/** HEAD **/

type Header = {
  title: string;
  props?: TableCellProps;
};

type SecuritiesTableHeadProps = {
  headers: Header[];
};

export const SecuritiesTableHead = ({ headers }: SecuritiesTableHeadProps) => {
  return (
    <TableHead sx={{ backgroundColor: "primary.main" }}>
      <TableRow>
        {headers.map((header) => (
          <TableCell
            key={header.title}
            sx={{ color: "secondary.main" }}
            {...header.props}
            scope="col"
          >
            {header.title}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};

/** BODY **/

type SecuritiesTableBodyProps = {
  securities: Security[];
};

const SecuritiesTableBody = ({ securities }: SecuritiesTableBodyProps) => {
  return (
    <TableBody sx={{ borderColor: "primary.main" }}>
      {securities.map((security) => (
        <TableRow key={security.id}>
          <TableCell>{security.ticker}</TableCell>
          <TableCell>{security.securityName}</TableCell>
          <TableCell>{security.sector}</TableCell>
          <TableCell>{security.country}</TableCell>
          <TableCell
            sx={{
              color: "white",
              backgroundColor: getTrendColor(security.trend),
            }}
            align="center"
          >
            {getPercentage(security.trend)}
          </TableCell>
        </TableRow>
      ))}
    </TableBody>
  );
};

/** TABLE **/

type LoadingProps = { loading: true; securities?: never };
type SecuritiesProps = { securities: Security[]; loading?: false };
type SecurityTableProps = LoadingProps | SecuritiesProps;

export const SecuritiesTable = ({ securities, loading }: SecurityTableProps) => {
  const headers: Header[] = [
    { title: "Symbol" },
    { title: "Name" },
    { title: "Sector" },
    { title: "Country" },
    { title: "Trend", props: { align: "center" } },
  ];

  return (
    <TableContainer component={Paper} elevation={0} sx={{ border: 1, borderColor: "lightgray" }}>
      <Table aria-label="securities table" size="small">
        <SecuritiesTableHead headers={headers} />

        {loading && <TableBodyLoader colCount={headers.length} />}
        {securities && <SecuritiesTableBody securities={securities} />}
      </Table>
    </TableContainer>
  );
};
