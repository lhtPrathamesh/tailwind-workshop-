import React from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { FaSort } from "react-icons/fa";

function SalesTable() {
  const createData = (name, ticketSolad, revenue) => {
    return { name, ticketSolad, revenue };
  };

  const rows = [
    createData("Hard Summer Music Festival", "250/500", "$200,321"),
    createData("When we were you", "370/500", "$120,192"),
    createData("Buku 2022", "400/500", "$80,092"),
    createData("Coachella 2022", "189/500", "$20,095"),
    createData("Lovers and Friends", "50/500", "$10,244"),
  ];
  return (
    <div className="mr-[26px] w-full lg:w-[50%]">
      <div className="mb-10 font-openSansSemiBold text-ft13 text-portalColor5 font-semibold">
        Sales by Event
      </div>
      <div className="w-full h-[401px] bg-white rounded-[10px] shadow-md py-5 overflow-scroll">
        {/* Table */}
        <TableContainer>
          <Table sx={{ minWidth: 350 }} aria-label="simple table">
            <TableHead>
              <TableRow>
                <TableCell className="font-openSansSemiBold text-ft11 text-portalColor5 font-semibold pl-7">
                  <div className="flex">
                    Event Name
                    <div className="h-[21px] w-[14px] flex items-center justify-center ml-[10px] bg-[#EFEFF3] rounded-[7px] cursor-pointer">
                      <FaSort width="100%" height="100%" fill="#949CAE" />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-openSansSemiBold text-ft11 text-portalColor5 font-semibold">
                  <div className="flex">
                    Ticket Sold
                    <div className="h-[21px] w-[14px] flex items-center justify-center ml-[10px] bg-[#EFEFF3] rounded-[7px] cursor-pointer">
                      <FaSort width="100%" height="100%" fill="#949CAE" />
                    </div>
                  </div>
                </TableCell>
                <TableCell className="font-openSansSemiBold text-ft11 text-portalColor5 font-semibold ">
                  <div className="flex">
                    Revenue
                    <div className="h-[21px] w-[14px] flex items-center justify-center ml-[10px] bg-[#EFEFF3] rounded-[7px] cursor-pointer">
                      <FaSort width="100%" height="100%" fill="#949CAE" />
                    </div>
                  </div>
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
                    className="font-openSansRegular text-ft11 text-portalColor5 h-15 pl-7"
                  >
                    {row.name}
                  </TableCell>
                  <TableCell className="font-openSansRegular text-ft11 text-portalColor5 h-15">
                    {row.ticketSolad}
                  </TableCell>
                  <TableCell className="font-openSansRegular text-ft11 text-portalColor5 h-15">
                    {row.revenue}
                  </TableCell>
                </TableRow>
              ))}
            </TableBody>
          </Table>
        </TableContainer>
      </div>
    </div>
  );
}

export default SalesTable;
