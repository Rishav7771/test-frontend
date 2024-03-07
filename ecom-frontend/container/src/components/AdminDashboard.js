import React, { useState, useEffect } from "react";
import axios from "axios";
import ModalProduct from "./ModalProduct";
import DataTable from "react-data-table-component";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/esm/Button";
import "../styles/admin.css";
import DeleteModal from "./DeleteModal";
import ErrorComponent from "./ErrorComponent";

function AdminDashboard() {
  const [products, setProducts] = useState([]);
  const [users, setUsers] = useState([]);
  const [activeTab, setActiveTab] = useState("products");
  const [search, setSearch] = useState("");
  const [searchuser, setSearchUser] = useState("");
  const [modalShow, setModalShow] = useState(false);
  const [deletemodalShow, setDeleteModalShow] = useState(false);
  const [filterproducts, setFilterProducts] = useState([]);
  const [filteruser, setFilterUser] = useState([]);
  const [triggerFetch, setTriggerFetch] = useState(0);
  const [deletionTargetId, setDeletionTargetId] = useState(null);
  const [deletionname, setDeletionName] = useState(null);
  const [loading,setLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProducts = async () => {
      try {
        const productResponse = await axios.get("http://localhost:8081/all/products");
        setProducts(productResponse.data);
        setFilterProducts(productResponse.data);
        setLoading(false);
      } catch (error) {
        console.error("Error fetching products:", error);
        setLoading(false);
        if (!error.response) { 
          setError("maintenance"); 
        } else if (error.response.status !== 500) { 
          setError(error.response.status); 
        } else {
          setError(true); 
        }
      }
    };

    const fetchUsers = async () => {
      const userResponse = await axios.get("http://localhost:8080/user/all");
      setUsers(userResponse.data);
      setFilterUser(userResponse.data);
    };

    fetchProducts();
    fetchUsers();
  }, [triggerFetch]);
  const handleDeleteProduct = async (productId , name) => {
    setDeletionTargetId(productId);
    setDeleteModalShow(true);
    setDeletionName(name);
    setTriggerFetch((current) => !current);
  };
  const handleDeleteUser = async (userId , name) => {
    setDeletionTargetId(userId);
    console.log(userId);
    setDeleteModalShow(true);
    setDeletionName(name);
    setTriggerFetch((current) => !current);
  };

  const navigate = useNavigate();

  const goToProductDetail = (id) => {
    navigate(`/products/${id}`);
  };

  const columns = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Quantity",
      selector: (row) => row.quantity,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <span>
            <i
              class="bi bi-eye"
              onClick={() => goToProductDetail(row.id)}
              style={{ marginRight: "15px" }}
              className="admin-button"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                class="bi bi-eye"
                viewBox="0 0 16 16"
              >
                <path d="M16 8s-3-5.5-8-5.5S0 8 0 8s3 5.5 8 5.5S16 8 16 8M1.173 8a13 13 0 0 1 1.66-2.043C4.12 4.668 5.88 3.5 8 3.5s3.879 1.168 5.168 2.457A13 13 0 0 1 14.828 8q-.086.13-.195.288c-.335.48-.83 1.12-1.465 1.755C11.879 11.332 10.119 12.5 8 12.5s-3.879-1.168-5.168-2.457A13 13 0 0 1 1.172 8z" />
                <path d="M8 5.5a2.5 2.5 0 1 0 0 5 2.5 2.5 0 0 0 0-5M4.5 8a3.5 3.5 0 1 1 7 0 3.5 3.5 0 0 1-7 0" />
              </svg>
            </i>
          </span>
          <span>
            <a
              onClick={() => handleDeleteProduct(row.id , row.name)}
              class="btn btn-sm btn-outline-danger ms-2"
            >
              <i class="bi bi-trash">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </i>
            </a>
          </span>
        </div>
      ),
    },
  ];
  const columns1 = [
    {
      name: "Name",
      selector: (row) => row.name,
      sortable: true,
    },
    {
      name: "Phone",
      selector: (row) => row.mobileNumber,
    },
    {
      name: "Email",
      selector: (row) => row.email,
      sortable: true,
    },
    {
      name: "Action",
      cell: (row) => (
        <div>
          <span>
            <a
              onClick={() => handleDeleteUser(row.userId , row.name)}
              class="btn btn-sm btn-outline-danger ms-2"
            >
              <i class="bi bi-trash">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-trash"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.5 5.5A.5.5 0 0 1 6 6v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m2.5 0a.5.5 0 0 1 .5.5v6a.5.5 0 0 1-1 0V6a.5.5 0 0 1 .5-.5m3 .5a.5.5 0 0 0-1 0v6a.5.5 0 0 0 1 0z" />
                  <path d="M14.5 3a1 1 0 0 1-1 1H13v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V4h-.5a1 1 0 0 1-1-1V2a1 1 0 0 1 1-1H6a1 1 0 0 1 1-1h2a1 1 0 0 1 1 1h3.5a1 1 0 0 1 1 1zM4.118 4 4 4.059V13a1 1 0 0 0 1 1h6a1 1 0 0 0 1-1V4.059L11.882 4zM2.5 3h11V2h-11z" />
                </svg>
              </i>
            </a>
          </span>
        </div>
      ),
    },
  ];
  useEffect(() => {
    const result = products.filter((product) => {
      return product.name.toLowerCase().match(search.toLowerCase());
    });
    setFilterProducts(result);
  }, [search]);

  useEffect(() => {
    const result = users.filter((user) => {
      return user.name.toLowerCase().match(searchuser.toLowerCase());
    });
    setFilterUser(result);
  }, [searchuser]);

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (error ? (
    <ErrorComponent message={ 
      error === "maintenance" ? "Site Under Maintenance" : 
        error === true ? "Internal Server Error" : 
          `Error: ${error}` 
    } />
  ) :
    <div className="container-fluid admin-dashboard">
      <h1 className="mb-4">Admin Dashboard</h1>
      <ul className="nav nav-tabs">
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "products" ? "active" : ""}`}
            onClick={() => handleTabClick("products")}
          >
            Product Management
          </button>
        </li>
        <li className="nav-item">
          <button
            className={`nav-link ${activeTab === "users" ? "active" : ""}`}
            onClick={() => handleTabClick("users")}
          >
            User Management
          </button>
        </li>
      </ul>

      {activeTab === "products" && (
        <div>
          <Button
            variant="primary"
            onClick={() => setModalShow(true)}
            style={{ backgroundColor: "black", margin:"15px 0 20px 0"}}
          >
            Add Product
          </Button>
          <div className="container-fluid">
            <DataTable
              columns={columns}
              data={filterproducts}
              pagination
              fixedHeader
              highlightOnHover
              subHeader
              subHeaderComponent={
                <form class="d-flex">
                  {" "}
                  <input
                    class="form-control mr-2"
                    type="search"
                    placeholder="Search"
                    aria-label="Search"
                    value={search}
                    onChange={(e) => setSearch(e.target.value)}
                  />
                </form>
              }
            ></DataTable>
            <ModalProduct
              show={modalShow}
              onHide={() => setModalShow(false)}
              isLoading={false}
              setTriggerFetch={setTriggerFetch}
            />
            <DeleteModal
              show={deletemodalShow}
              onHide={() => setDeleteModalShow(false)}
              isLoading={false}
              id={deletionTargetId}
              deletionType={"product"}
              name={deletionname}
              setTriggerFetch={setTriggerFetch}
            />
          </div>
        </div>
      )}

      {activeTab === "users" && (
        <div>
          <DataTable
            columns={columns1}
            data={filteruser}
            pagination
            fixedHeader
            highlightOnHover
            subHeader
            subHeaderComponent={
              <form class="d-flex">
                {" "}
                <input
                  class="form-control mr-2"
                  type="searchUser"
                  placeholder="Search"
                  aria-label="SearchUser"
                  value={searchuser}
                  onChange={(e) => setSearchUser(e.target.value)}
                />
              </form>
            }
          ></DataTable>
          <DeleteModal
            show={deletemodalShow}
            onHide={() => setDeleteModalShow(false)}
            isLoading={false}
            id={deletionTargetId}
            deletionType={"user"}
            name={deletionname}
            setTriggerFetch={setTriggerFetch}
          />
        </div>
      )}
    </div>
  );
}

export default AdminDashboard;
