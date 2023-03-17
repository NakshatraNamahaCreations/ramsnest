import React from "react";
import BootstrapTable from "react-bootstrap-table-next";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import { Link } from "react-router-dom";
import { Button } from "react-bootstrap";
import Modal from "react-bootstrap/Modal";

function Customers() {
  const [data, setdata] = useState([]);
  const { SearchBar, ClearSearchButton } = Search;
  const { ExportCSVButton } = CSVExport;
  const apiURL = "https://api.howdzat.com/api";
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  useEffect(() => {
    getcustomer();
  }, []);

  const getcustomer = () => {
    try {
      axios
        .get(`${apiURL}/getallcustomerorders`)
        .then(function (response) {
          if (response.status === 200) {
            setdata(response.data.foodorder);
            return;
          } else {
            alert("Can't able to fetch ");
            //setdatacondition(true);
            return;
          }
        })
        .catch(function (error) {
          // setdatacondition(true);

          alert("Can't able to fetch ");
          return;
        });
    } catch (error) {
      console.warn(error);
      alert("Can't able  to fetch ");
      // setdatacondition(true);
      return error;
    }
  };

  const update = async (data) => {
    axios({
      method: "post",
      url: "https://api.howdzat.com/api/updatestatus/" + data._id,
    })
      .then(function (response) {
        //handle success
        alert("food delivered successfulluy");
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        //handle error
        console.log(error.response.data);
      });
  };
  const customTotal = (from, to, size) => (
    <span className="react-bootstrap-table-pagination-total">
      Showing {from} to {to} of {size} Results
    </span>
  );

  const options = {
    paginationSize: 4,
    pageStartIndex: 0,

    firstPageText: "First",
    prePageText: "Back",
    nextPageText: "Next",
    lastPageText: "Last",
    nextPageTitle: "First page",
    prePageTitle: "Pre page",
    firstPageTitle: "Next page",
    lastPageTitle: "Last page",
    showTotal: true,
    paginationTotalRenderer: customTotal,
    disablePageTitle: true,
    sizePerPageList: [
      {
        text: "5",
        value: 5,
      },
      {
        text: "10",
        value: 10,
      },
      {
        text: "All",
        value: data.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };

  const columns = [
    {
      dataField: "customername",
      text: "Customer name",
      sort: true,
    },
    {
      dataField: "_id",
      text: "Order Id",
      sort: true,
    },
   
    {
      dataField: "paymentmethod",
      text: "Payment Method",
    },

    {
      dataField: "total",
      text: "Total Amount",
    },
    {
      dataField: "customerorderdatetime",
      text: "Placed On",
    },
    {
      dataField: "",
      text: "Status",
      formatter: (cell, row) => {
        return (
          <div>
            {row.status === "inprocess" ? (
              <p style={{ background: "red", color: "white" }}>{row.status}</p>
            ) : (
              <p style={{ background: "#198754", color: "white" }}>
                {row.status}
              </p>
            )}
          </div>
        );
      },
    },
    {
      dataField: "",
      text: "Action",
      formatter: (cell, row) => {
        console.log(row);
        return (
          <div>
            <Link to="/customerinvoice" state={{ data: row }}>
              <Button style={{ width: "80px" }}>view</Button>
            </Link>
            <button
              data-bs-toggle="modal"
              data-bs-target="#exampleModal"
              class="btn btn-secondary"
              style={{ marginTop: "5px" }}
            >
              Update
            </button>

            <div
              class="modal fade"
              id="exampleModal"
              tabindex="-1"
              aria-labelledby="exampleModalLabel"
              aria-hidden="true"
            >
              <div class="modal-dialog">
                <div class="modal-content">
                  <div class="modal-header">
                    <h5 class="modal-title" id="exampleModalLabel">
                      Food delivered
                    </h5>
                    <button
                      type="button"
                      class="btn-close"
                      data-bs-dismiss="modal"
                      aria-label="Close"
                    ></button>
                  </div>
                  <div class="modal-body">Food is delivered</div>
                  <div class="modal-footer">
                    <button
                      type="button"
                      class="btn btn-secondary"
                      data-bs-dismiss="modal"
                    >
                      No
                    </button>
                    <button
                      type="button"
                      class="btn btn-primary"
                      onClick={() => update(row)}
                    >
                      Yes{" "}
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        );
      },
    },
  ];

  return (
    <div>
      <div className="row">
        <Header />
        <div className="col-md-2">
          <Sidebar />
        </div>
        <div className="col-md-10">
          <div className="magin mt-4">
            <h4>Customer orders</h4>
            <ToolkitProvider
              keyField="id"
              data={data}
              columns={columns}
              search
              exportCSV={{
                fileName: "customerorder.csv",
                blobType: "text/csv;charset=ansi",
              }}
            >
              {(props) => (
                <div>
                  <span className="pr-5 mr-auto">
                    <ExportCSVButton
                      className="btn-outline-success"
                      {...props.csvProps}
                    >
                      Export to CSV
                    </ExportCSVButton>
                  </span>
                  <span className="pl-5 ml-5 mr-5 mt-5">
                    <SearchBar
                      className="form-control "
                      {...props.searchProps}
                    />
                  </span>
                  <ClearSearchButton
                    className="btn-outline-info"
                    {...props.searchProps}
                  />

                  <hr />
                  <div className="table-responsive">
                    <BootstrapTable
                      keyField="customer"
                      responsive
                      hover
                      columns={columns}
                      data={data}
                      pagination={paginationFactory(options)}
                      {...props.baseProps}
                    />
                  </div>
                </div>
              )}
            </ToolkitProvider>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Customers;
