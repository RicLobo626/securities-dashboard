import TableBody from "@mui/material/TableBody";
import Skeleton from "@mui/material/Skeleton";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

type Props = {
  colCount: number;
  rowCount?: number;
};

export const TableBodyLoader = ({ rowCount = 20, colCount }: Props) => {
  return (
    <TableBody sx={{ borderColor: "primary.main" }}>
      {[...Array(rowCount)].map((_, rowIdx) => (
        <TableRow key={rowIdx}>
          {[...Array(colCount)].map((_, colIdx) => (
            <TableCell key={colIdx}>
              <Skeleton animation="wave" variant="text" />
            </TableCell>
          ))}
        </TableRow>
      ))}
    </TableBody>
  );
};
