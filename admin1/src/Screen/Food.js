import React, { useEffect, useState, useRef } from "react";
import { Button, Modal } from "react-bootstrap";
import Header from "./layout/Header";
import Sidebar from "./layout/Sidebar";
import paginationFactory from "react-bootstrap-table2-paginator";
import ToolkitProvider, {
  Search,
  CSVExport,
} from "react-bootstrap-table2-toolkit";
import BootstrapTable from "react-bootstrap-table-next";
import { Card } from "react-bootstrap";
import axios from "axios";
import { Link } from "react-router-dom";
import DatePicker from "react-multi-date-picker";
// import * as XLSX from "xlsx";
import { DownloadTableExcel } from "react-export-table-to-excel";

function Rooms() {
  const [isOpen, setIsOpen] = useState(false);
  const { SearchBar, ClearSearchButton } = Search;
  const imageURL = "https://api.howdzat.com";
  const [selected, setselected] = useState([]);

  const [stock, setstock] = useState("");
  const [free, setfree] = useState("");
  const [date, setdate] = useState(new Date());
  const [basicprice, setbasicprice] = useState("");
  const [tax, settax] = useState("");
  const [food, setfood] = useState([]);
  const [excel, setexcel] = useState();
  const [image, setimage] = useState();
  const [data1, setdata1] = useState([]);
  const formdata = new FormData();
  const { ExportCSVButton } = CSVExport;
  const tableRef = useRef(null);

  console.log(image);
  const showModal = () => {
    setIsOpen(true);
  };

  const hideModal = () => {
    setIsOpen(false);
  };

  const remove = async (data) => {
    axios({
      method: "post",
      url: "https://api.howdzat.com/api/deletefood/" + data._id,
    })
      .then(function (response) {
        //handle success
        console.log(response);
        window.location.reload();
      })
      .catch(function (error) {
        //handle error
        console.log(error.response.data);
      });
  };
  const columns = [
    {
      dataField: "category",
      text: "Category",
      sort: true,
    },
    {
      dataField: "subcategory",
      text: "Subcategory",
      sort: true,
    },
    {
      dataField: "foodname",
      text: "food Name",
    },
    {
      dataField: "",
      text: "food Images",
      formatter:(cell,row)=>{
        return(
          <div > 
            <img src={"https://api.howdzat.com/food/" + row.foodimage[0]}  width="45px" height="45px"/>
            <img className="fi" src={"https://api.howdzat.com/food/" + row.foodimage[1]}  width="45px" height="45px"/>
            <img  className="fi" src={"https://api.howdzat.com/food/" + row.foodimage[2]}  width="45px" height="45px"/>
          </div>
        )
      }
    },
    {
      dataField: "fooddesc",
      text: "food Description",
    },
    {
      dataField: "foodprice",
      text: "food Price",
    },
   
    {
      dataField: "",
      text: "Action",
      formatter: (cell, row) => {
        console.log(row);
        return (
          <div>
            <i
              class="fa-solid fa-trash-can"
              onClick={() => remove(row)}
              style={{ color: "red" }}
            ></i>

            <Link
              to="/editfood"
              state={{ data: row }}
              style={{ marginLeft: "10px" }}
            >
              <i class="fa-regular fa-pen-to-square"></i>
            </Link>
          </div>
        );
      },
    },
  ];

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
        value: food.length,
      },
    ], // A numeric array is also available. the purpose of above example is custom the text
  };
  useEffect(() => {
    getallfoods();
  }, []);

  const getallfoods = async () => {
    let res = await axios.get(
      "https://api.howdzat.com/api/getallfood"
    );
    if ((res.status = 200)) {
      console.log(res);
      setfood(res.data?.foods);
    }
  };



  return (
    <div className="row">
      <Header />
      <div className="col-md-2">
       <Sidebar />
      </div>
      <div className="col-md-10 v1" >
        <div className="magin">
          <div className="d-flex">
            <a href="/addfood" className="btn btn-primary mt-2 me-2" style={{background:"black"}}>
              Add food
            </a>

           
          </div>

          <Modal show={isOpen} onHide={hideModal}>
            <Modal.Header>
              <Modal.Title>Add Stock</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              <div>
                <div className="form-group">
                  <label className="mt-2">Date</label>
                  <DatePicker
                    style={{ width: "466px", height: "38px" }}
                    format="DD/MM/YYYY"
                    type="input-icon"
                    minDate={new Date()}
                    onChange={(date) => setdate(date.format("DD/MM/YYYY"))}
                  />
                  <label className="mt-2">Price</label>
                  <input
                    type="text"
                    placeholder="Enter Amount"
                    className="form-control"
                    onChange={(e) => setbasicprice(e.target.value)}
                  ></input>
                  <label className="mt-2">Stock</label>
                  <input
                    type="text"
                    placeholder="Enter Quantity"
                    className="form-control"
                    onChange={(e) => setstock(e.target.value)}
                  ></input>
                  <label className="mt-2">Free</label>
                  <input
                    type="text"
                    placeholder="Enter Free"
                    className="form-control"
                    onChange={(e) => setfree(e.target.value)}
                  ></input>
                  <label className="mt-2">Tax</label>
                  <input
                    type="text"
                    placeholder="Enter Free"
                    className="form-control"
                    onChange={(e) => settax(e.target.value)}
                  ></input>
                </div>
                <br></br>
              </div>
            </Modal.Body>
            <Modal.Footer>
              <Button variant="info" onClick={hideModal}>
                Cancel
              </Button>
              <Button variant="danger">Save</Button>
            </Modal.Footer>
          </Modal>
          <ToolkitProvider
            keyField="id"
            data={food}
            columns={columns}
            search
            exportCSV={{
              fileName: "foods.csv",
              blobType: "text/csv;charset=ansi",
            }}
          >
            {(props) => (
              <div className="mt-5">
                <span className="pr-5 mr-auto">
                  <ExportCSVButton
                    className="btn-outline-success"
                    {...props.csvProps}
                  >
                    Export to CSV
                  </ExportCSVButton>
                </span>
                <span className="pl-5 ms-5 me-5 mt-5">
                  <SearchBar className="form-control " {...props.searchProps} />
                </span>
                <ClearSearchButton
                  className="btn-outline-info"
                  {...props.searchProps}
                />

                <hr />
                <div className="table-responsive">
                  <BootstrapTable
                    keyField="patient"
                    responsive
                    hover
                    columns={columns}
                    data={food}
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
  );
}

export default Rooms;
