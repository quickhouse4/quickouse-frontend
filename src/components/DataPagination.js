import React from "react";
import { BsArrowLeftCircle, BsArrowRightCircle } from "react-icons/bs";

function DataPagination({
    pageOptions,
    columnLength,
    canNextPage,
    canPreviousPage,
    pageSize,
    setPageSize,
    gotoPage,
    previousPage,
    nextPage,
    pageIndex,
  }) {
    return (
      <div>
        {pageOptions.length >= 0 && (
          <table className="w-full mt-2">
            <tfoot className="w-full py-2">
              <tr className="w-full py-2">
                <td colSpan={columnLength}>
                  <div className="w-full justify-content-center d-flex mx-auto flex-row align-items-center overflow-x-auto">
                    <button
                      type="button"
                      className="mx-2 text-white rounded-3 font-weight-bold d-flex align-items-center justify-content-center bg-primary h-30 w-60 cursor-pointer"
                      onClick={() => previousPage()}
                      disabled={!canPreviousPage}
                    >
                      <BsArrowLeftCircle className="w-5" fontSize="sm" />
                    </button>{" "}
                    <button
                      type="button"
                      onClick={() => nextPage()}
                      disabled={!canNextPage}
                      className="mx-2 text-white rounded-3 font-weight-bold d-flex align-items-center justify-content-center bg-primary h-30 w-60 cursor-pointer"
                    >
                      <BsArrowRightCircle className="w-5" fontSize="sm" />
                    </button>{" "}
                    <div className="d-flex flex-row justify-content-center w-full fs-6 align-items-center mb-2">
                      <span className="d-inline mx-2 rounded-md">
                        Page{" "}
                        <strong>
                          {pageIndex + 1} of
                          {` ${pageOptions.length}`}
                        </strong>{" "}
                      </span>
                      <span className="d-inline mx-2">
                        | Go to page:{" "}
                        <input
                          type="number"
                          className="form-control border-primary rounded-3"
                          defaultValue={pageIndex + 1}
                          onChange={(e) => {
                            const pageNumber = e.target.value
                              ? Number(e.target.value) - 1
                              : 0;
                            gotoPage(pageNumber);
                          }}
                        />
                      </span>
                      <select
                        className="px-2 h-10 font-raleway rounded-3 border-primary mt-4 py-2"
                        value={pageSize}
                        onChange={(e) => setPageSize(Number(e.target.value))}
                      >
                        {[3, 5, 10, 25, 50, 100].map((pgSize) => (
                          <option key={pgSize} value={pgSize} >
                            Show {pgSize}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </td>
              </tr>
            </tfoot>
          </table>
        )}
      </div>
    );
  }
  
  export default DataPagination;