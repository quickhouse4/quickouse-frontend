import React, { useMemo } from "react";
import {
    useGlobalFilter,
    usePagination,
    useSortBy,
    useTable,
} from "react-table";
import DataPagination from "./DataPagination";
import * as XLSX from 'xlsx';

function DataTable({ data, columns, title }) {
    const sortedColumns = useMemo(() => [...columns], [columns]);
    const sortedData = data;
    const TableInstance = useTable(
        { data: sortedData, columns: sortedColumns, initialState: { pageSize: 5 } },
        useGlobalFilter,
        useSortBy,
        usePagination
    );

    const {
        getTableProps,
        setGlobalFilter,
        getTableBodyProps,
        page,
        nextPage,
        previousPage,
        canPreviousPage,
        canNextPage,
        gotoPage,
        pageCount,
        setPageSize,
        pageOptions,
        headerGroups,
        prepareRow,
        state,
    } = TableInstance;

    // @ts-ignore
    const { globalFilter, pageIndex, pageSize } = state;

    const downloadExcel = () => {
        const worksheet = XLSX.utils.json_to_sheet(sortedData);
        const workbook = XLSX.utils.book_new();
        XLSX.utils.book_append_sheet(workbook, worksheet, "Sheet1");
        XLSX.writeFile(workbook, `${title}.xlsx`);
    };

    return (
        <div className="bg-white border shadow-md px-5 py-8 rounded-md w-100 mx-auto lg:w-80 lg:ml-60 mb-10">
            <div className="d-flex items-center justify-content-between pb-6">
                <div>
                    <h2 className="font-weight-bold text-xl">
                        {title}
                    </h2>
                    <input
                        defaultValue={globalFilter || ""}
                        placeholder="Filter"
                        className="form-control border-gray-300 py-2 mt-4 rounded outline-none px-5 my-2 font-sans fs-6 w-52"
                        onChange={(e) => setGlobalFilter(e.target.value)}
                    />
                </div>
                <button
                    onClick={downloadExcel}
                    className="btn  px-4 py-2 text-white font-sans fs-6 my-4 font-weight-bold"
                    style={{ background: "#010a14", borderRadius: "10px", height: "40px"}}
                >
                    Download Excel
                </button>
            </div>
            <div style={{ overflowX: "auto" }}>
                <table className="table table-hover" {...getTableProps()}>
                    <thead className="text-white" style={{background:"#010a14"}}>
                        {headerGroups.map((headerGroup) => (
                            <tr {...headerGroup.getHeaderGroupProps()}>
                                {headerGroup.headers.map((column) => (
                                    <th
                                        className={column.isSorted ? "sort-asc thead" : "thead"}
                                        {...column.getHeaderProps(column.getSortByToggleProps())}
                                    >
                                        {column.render("Header")}
                                    </th>
                                ))}
                            </tr>
                        ))}
                    </thead>
                    <tbody {...getTableBodyProps()}>
                        {page.map((row) => {
                            prepareRow(row);

                            const rowTheme = row.index % 2 !== 0
                                ? "bg-light-bg"
                                : "bg-white";

                            return (
                                <tr className={` ${rowTheme} `} {...row.getRowProps()}>
                                    {row.cells.map((cell) => (
                                        <td className="data-cell" {...cell.getCellProps()}>
                                            {cell.render("Cell")}
                                        </td>
                                    ))}
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
                <DataPagination
                    pageOptions={pageOptions}
                    canNextPage={canNextPage}
                    gotoPage={gotoPage}
                    columnLength={columns.length}
                    canPreviousPage={canPreviousPage}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    previousPage={previousPage}
                    nextPage={nextPage}
                    pageCount={pageCount}
                    pageIndex={pageIndex}
                />
            </div>
        </div>
    );
}

export default DataTable;
