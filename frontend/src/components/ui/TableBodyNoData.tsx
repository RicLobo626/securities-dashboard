import TableRow from "@mui/material/TableRow";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";

type Props = {
  colCount: number;
};

export const TableBodyNoData = ({ colCount }: Props) => {
  return (
    <TableBody>
      <TableRow>
        <TableCell colSpan={colCount} align="center" sx={{ fontSize: "1rem" }}>
          No data available
        </TableCell>
      </TableRow>
    </TableBody>
  );
};
