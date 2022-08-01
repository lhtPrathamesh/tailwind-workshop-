import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";

function WhitelistTable() {
  const createData = (name, email, mobile, features) => {
    return { name, email, mobile, features };
  };

  const rows = [
    createData(
      "John Doe",
      "Johndoe@gmail.com",
      "09958693963",
      "Community, Homepage"
    ),
    createData(
      "Juan Dela Cruz",
      "Jdelacruz@gmail.com",
      "09958693963",
      "Community, Homepage"
    ),
    createData(
      "Maine Jaspeih",
      "Mainejaspeih@gmail.com",
      "09958693963",
      "Community, Homepage"
    ),
    createData(
      "Melanie moore",
      "Melaniemoore@gmail.com",
      "09958693963",
      "Community, Homepage"
    ),
    createData(
      "Olivia Wharton",
      "Oliviawharton@gmail.com",
      "09958693963",
      "Community, Homepage"
    ),
  ];
  return (
    <div className="bg-white w-full h-[471px] rounded-[10px] shadow-md">
      <TableContainer>
        <Table sx={{ minWidth: 350 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell className="font-openSansSemiBold text-ft11 text-portalColor5 font-semibold h-[70px] pl-7">
                Name
              </TableCell>
              <TableCell className="font-openSansSemiBold text-ft11 text-portalColor5 font-semibold h-[70px">
                Email Address
              </TableCell>
              <TableCell className="font-openSansSemiBold text-ft11 text-portalColor5 font-semibold h-[70px">
                Mobile Number
              </TableCell>
              <TableCell className="font-openSansSemiBold text-ft11 text-portalColor5 font-semibold h-[70px">
                Features
              </TableCell>
              <TableCell className="font-openSansSemiBold text-ft11 text-portalColor5 font-semibold h-[70px">
                Action
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row, index) => (
              <TableRow
                key={row.name}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell
                  component="th"
                  scope="row"
                  className="font-openSansRegular text-ft11 text-portalColor5 h-20 pl-7"
                >
                  {row.name}
                </TableCell>
                <TableCell className="font-openSansRegular text-ft11 text-portalColor5 h-20">
                  {row.email}
                </TableCell>
                <TableCell className="font-openSansRegular text-ft11 text-portalColor5 h-20">
                  {row.mobile}
                </TableCell>
                <TableCell className="font-openSansRegular text-ft11 text-portalColor5 h-20">
                  {row.features}
                </TableCell>
                <TableCell className="font-openSansRegular text-ft11 text-portalColor5 h-20">
                  <img src="/images/action.svg" alt="" />
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </div>
  );
}

export default WhitelistTable;
