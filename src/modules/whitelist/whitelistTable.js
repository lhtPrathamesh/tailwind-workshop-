import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FaSort } from "react-icons/fa";
import Pagination from "@mui/material/Pagination";
import Stack from "@mui/material/Stack";

function WhitelistTable({ searchValue }) {
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
    <div className="">
      <div className="bg-white w-full h-[471px] rounded-[10px] shadow-md mb-8">
        <TableContainer>
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="font-openSansSemiBold text-ft11 text-portalColor5 font-semibold h-[70px] pl-7">
                  <div className="flex">
                    Name
                    <div className="h-[21px] w-[14px] flex items-center justify-center ml-6 bg-[#EFEFF3] rounded-[7px] cursor-pointer">
                      <FaSort width="100%" height="100%" fill="#949CAE" />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-openSansSemiBold text-ft11 text-portalColor5 font-semibold h-[70px">
                  <div className="flex">
                    Email Address
                    <div className="h-[21px] w-[14px] flex items-center justify-center ml-6 bg-[#EFEFF3] rounded-[7px] cursor-pointer">
                      <FaSort width="100%" height="100%" fill="#949CAE" />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-openSansSemiBold text-ft11 text-portalColor5 font-semibold h-[70px">
                  <div className="flex">
                    Mobile Number
                    <div className="h-[21px] w-[14px] flex items-center justify-center ml-6 bg-[#EFEFF3] rounded-[7px] cursor-pointer">
                      <FaSort width="100%" height="100%" fill="#949CAE" />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-openSansSemiBold text-ft11 text-portalColor5 font-semibold h-[70px">
                  <div className="flex">
                    Features
                    <div className="h-[21px] w-[14px] flex items-center justify-center ml-6 bg-[#EFEFF3] rounded-[7px] cursor-pointer">
                      <FaSort width="100%" height="100%" fill="#949CAE" />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-openSansSemiBold text-ft11 text-portalColor5 font-semibold h-[70px">
                  <div className="flex">
                    Action
                    <div className="h-[21px] w-[14px] flex items-center justify-center ml-6 bg-[#EFEFF3] rounded-[7px] cursor-pointer">
                      <FaSort width="100%" height="100%" fill="#949CAE" />
                    </div>
                  </div>
                </TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows
                  .filter((row) => {
                    if (
                      searchValue !== "" &&
                      (row.name
                        .toLowerCase()
                        .toString()
                        .includes(searchValue.toLowerCase().toString()) ||
                        row.email
                          .toLowerCase()
                          .toString()
                          .includes(searchValue.toLowerCase().toString()))
                    ) {
                      return row;
                    } else if (searchValue === "") {
                      return row;
                    }
                  })
                  .map((row, index) => (
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
                        <img
                          src="/images/action.svg"
                          alt=""
                          className="cursor-pointer"
                        />
                      </TableCell>
                    </TableRow>
                  ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
      <div className="flex items-center justify-between">
        <span className="font-openSansRegular text-ft11 text-portalColor4">
          Show <span className="text-portalColor5">1</span> to{" "}
          <span className="text-portalColor5">1</span> of{" "}
          <span className="text-portalColor5">5</span>
        </span>

        <Stack spacing={2}>
          <Pagination
            count={1}
            variant="outlined"
            shape="rounded"
            className="cursor-pointer"
          />
        </Stack>
      </div>
    </div>
  );
}

export default WhitelistTable;
