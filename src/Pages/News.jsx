import React, { useEffect, useRef, useState } from "react";
import "./news.css";
import {
  MDBContainer,
  MDBCol,
  MDBIcon,
  MDBPagination,
  MDBPaginationItem,
  MDBPaginationLink,
  MDBRipple,
  MDBRow,
} from "mdb-react-ui-kit";
import { Link, Outlet } from "react-router-dom";
import { News_instance } from "../Constants/axios";
import { Rapid_api_token } from "../Constants/constantUrl";

export default function News() {
  // let randomIndex = useRef(0);
  // let reduceTo5 = useRef("");

  const [newsData, setNewsData] = useState([]);

  useEffect(() => {
    let fetchData = async () => {
      let response = await News_instance.get("/news/v2/get-details", {
        params: { uuid: "9803606d-a324-3864-83a8-2bd621e6ccbd" },
        headers: {
          "X-RapidAPI-Key": Rapid_api_token,
          "X-RapidAPI-Host": "apidojo-yahoo-finance-v1.p.rapidapi.com",
        },
      });

      console.log(response);
    };

    fetchData();
  }, []);

  return (
    <>
      <div className="bg-morpheus-den-gradient gap-top gap-bottom"></div>
      <div style={{ textAlign: "center" }}>
        <h4 style={{ color: "#000000" }}>Brokers in News</h4>
        <small className="text-muted">{new Date().toDateString()}</small>
      </div>
      <MDBContainer className="grad-bg py-5">
        <MDBRow className="gx-lg-5">
          <MDBCol lg="4" md="6" className="related-news mb-4 mb-lg-0">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/113.webp"
                className="img-fluid"
                alt=""
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
              <MDBRow className="mb-3">
                <MDBCol col="6">
                  <a href="#d" className="text-info">
                    <MDBIcon fas icon="plane" className="me-1" />
                    Travels
                  </a>
                </MDBCol>
                <MDBCol col="6" className="text-end">
                  <u> 15.07.2020</u>
                </MDBCol>
              </MDBRow>
              <a href="#!" className="text-dark">
                <h5>This is title of the news</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  iste aliquid. Sed id nihil magni, sint vero provident esse
                  numquam perferendis ducimus dicta adipisci iusto nam
                  temporibus modi animi laboriosam?
                </p>
              </a>
              <hr />

              <Link to={"/news/2"}>
                <MDBRow className="related-news mb-4 border-bottom pb-2">
                  <MDBCol size="3">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/041.webp"
                      className="img-fluid shadow-1-strong rounded"
                      alt="Hollywood Sign on The Hill"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <p className="mb-2">
                      <strong>Lorem ipsum dolor sit amet</strong>
                    </p>
                    <p>
                      <u> 15.07.2020</u>
                    </p>
                  </MDBCol>
                </MDBRow>
              </Link>

              <a href="#!" className="text-dark">
                <MDBRow className="related-news mb-4 border-bottom pb-2">
                  <MDBCol size="3">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/042.webp"
                      className="img-fluid shadow-1-strong rounded"
                      alt="Hollywood Sign on The Hill"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <p className="mb-2">
                      <strong>Lorem ipsum dolor sit amet</strong>
                    </p>
                    <p>
                      <u> 15.07.2020</u>
                    </p>
                  </MDBCol>
                </MDBRow>
              </a>
              <a href="#!" className="text-dark">
                <MDBRow className="related-news mb-4 border-bottom pb-2">
                  <MDBCol size="3">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/043.webp"
                      className="img-fluid shadow-1-strong rounded"
                      alt="Hollywood Sign on The Hill"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <p className="mb-2">
                      <strong>Lorem ipsum dolor sit amet</strong>
                    </p>
                    <p>
                      <u> 15.07.2020</u>
                    </p>
                  </MDBCol>
                </MDBRow>
              </a>
              <a href="#!" className="text-dark">
                <MDBRow className="related-news mb-4 border-bottom pb-2">
                  <MDBCol size="3">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/044.webp"
                      className="img-fluid shadow-1-strong rounded"
                      alt="Hollywood Sign on The Hill"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <p className="mb-2">
                      <strong>Lorem ipsum dolor sit amet</strong>
                    </p>
                    <p>
                      <u> 15.07.2020</u>
                    </p>
                  </MDBCol>
                </MDBRow>
              </a>
            </div>
          </MDBCol>
          <MDBCol lg="4" md="6" className="mb-4 mb-lg-0 related-news">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/011.webp"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
              <MDBRow className="mb-3 ">
                <MDBCol col="6">
                  <a href="" className="text-danger">
                    <MDBIcon fas icon="chart-pie" className="me-1" />
                    Business
                  </a>
                </MDBCol>
                <MDBCol col="6" className="text-end">
                  <u> 15.07.2020</u>
                </MDBCol>
              </MDBRow>
              <a href="#!" className="text-dark">
                <h5>This is title of the news</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  iste aliquid. Sed id nihil magni, sint vero provident esse
                  numquam perferendis ducimus dicta adipisci iusto nam
                  temporibus modi animi laboriosam?
                </p>
              </a>
              <hr />
              <a href="#!" className="text-dark">
                <MDBRow className="related-news mb-4 border-bottom pb-2">
                  <MDBCol size="3">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/031.webp"
                      className="img-fluid shadow-1-strong rounded"
                      alt="Hollywood Sign on The Hill"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <p className="mb-2">
                      <strong>Lorem ipsum dolor sit amet</strong>
                    </p>
                    <p>
                      <u> 15.07.2020</u>
                    </p>
                  </MDBCol>
                </MDBRow>
              </a>
              <a href="#!" className="text-dark">
                <MDBRow className=" related-news mb-4 border-bottom pb-2">
                  <MDBCol size="3">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/032.webp"
                      className="img-fluid shadow-1-strong rounded"
                      alt="Hollywood Sign on The Hill"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <p className="mb-2">
                      <strong>Lorem ipsum dolor sit amet</strong>
                    </p>
                    <p>
                      <u> 15.07.2020</u>
                    </p>
                  </MDBCol>
                </MDBRow>
              </a>
              <a href="#!" className="text-dark">
                <MDBRow className="mb-4 border-bottom pb-2 related-news">
                  <MDBCol size="3">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/033.webp"
                      className="img-fluid shadow-1-strong rounded"
                      alt="Hollywood Sign on The Hill"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <p className="mb-2">
                      <strong>Lorem ipsum dolor sit amet</strong>
                    </p>
                    <p>
                      <u> 15.07.2020</u>
                    </p>
                  </MDBCol>
                </MDBRow>
              </a>
              <a href="#!" className="text-dark">
                <MDBRow className="mb-4 border-bottom pb-2 related-news">
                  <MDBCol size="3">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/034.webp"
                      className="img-fluid shadow-1-strong rounded"
                      alt="Hollywood Sign on The Hill"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <p className="mb-2">
                      <strong>Lorem ipsum dolor sit amet</strong>
                    </p>
                    <p>
                      <u> 15.07.2020</u>
                    </p>
                  </MDBCol>
                </MDBRow>
              </a>
            </div>
          </MDBCol>
          <MDBCol lg="4" md="12" className="mb-4 mb-lg-0 related-news">
            <div>
              <img
                src="https://mdbcdn.b-cdn.net/img/new/fluid/city/018.webp"
                className="img-fluid"
              />
              <a href="#!">
                <div
                  className="mask"
                  style={{ backgroundColor: "rgba(251, 251, 251, 0.15)" }}
                ></div>
              </a>
              <MDBRow className="mb-3">
                <MDBCol col="6">
                  <a href="" className="text-warning">
                    <MDBIcon fas icon="code" className="me-1" />
                    Technology
                  </a>
                </MDBCol>
                <MDBCol col="6" className="text-end">
                  <u> 15.07.2020</u>
                </MDBCol>
              </MDBRow>
              <a href="#!" className="text-dark">
                <h5>This is title of the news</h5>
                <p>
                  Lorem ipsum dolor sit amet consectetur adipisicing elit. Odit,
                  iste aliquid. Sed id nihil magni, sint vero provident esse
                  numquam perferendis ducimus dicta adipisci iusto nam
                  temporibus modi animi laboriosam?
                </p>
              </a>
              <hr />
              <a href="#!" className="text-dark">
                <MDBRow className="mb-4 border-bottom pb-2 related-news">
                  <MDBCol size="3">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/011.webp"
                      className="img-fluid shadow-1-strong rounded"
                      alt="Hollywood Sign on The Hill"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <p className="mb-2">
                      <strong>Lorem ipsum dolor sit amet</strong>
                    </p>
                    <p>
                      <u> 15.07.2020</u>
                    </p>
                  </MDBCol>
                </MDBRow>
              </a>
              <a href="#!" className="text-dark">
                <MDBRow className="mb-4 border-bottom pb-2 related-news">
                  <MDBCol size="3">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/012.webp"
                      className="img-fluid shadow-1-strong rounded"
                      alt="Hollywood Sign on The Hill"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <p className="mb-2">
                      <strong>Lorem ipsum dolor sit amet</strong>
                    </p>
                    <p>
                      <u> 15.07.2020</u>
                    </p>
                  </MDBCol>
                </MDBRow>
              </a>
              <a href="#!" className="text-dark">
                <MDBRow className="mb-4 border-bottom pb-2 related-news">
                  <MDBCol size="3">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/013.webp"
                      className="img-fluid shadow-1-strong rounded"
                      alt="Hollywood Sign on The Hill"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <p className="mb-2">
                      <strong>Lorem ipsum dolor sit amet</strong>
                    </p>
                    <p>
                      <u> 15.07.2020</u>
                    </p>
                  </MDBCol>
                </MDBRow>
              </a>
              <a href="#!" className="text-dark">
                <MDBRow className="mb-4 border-bottom pb-2 related-news">
                  <MDBCol size="3">
                    <img
                      src="https://mdbcdn.b-cdn.net/img/new/standard/city/014.webp"
                      className="img-fluid shadow-1-strong rounded"
                      alt="Hollywood Sign on The Hill"
                    />
                  </MDBCol>

                  <MDBCol size="9">
                    <p className="mb-2">
                      <strong>Lorem ipsum dolor sit amet</strong>
                    </p>
                    <p>
                      <u> 15.07.2020</u>
                    </p>
                  </MDBCol>
                </MDBRow>
              </a>
            </div>
          </MDBCol>
        </MDBRow>
        <nav
          aria-label="..."
          style={{
            boxShadow:
              "0px -16px 48px rgba(6, 35, 63, 0.03), 0px 16px 48px rgba(6, 35, 63, 0.03)",
          }}
        >
          <MDBPagination
            circle
            className="mb-0 justify-content-center pagination-section"
          >
            <MDBPaginationItem>
              <MDBPaginationLink
                className="pagination-nav"
                href="#"
                tabIndex={-1}
                aria-disabled="true"
              >
                Previous
              </MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink className="pagination-nav" href="#">
                1
              </MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink
                href="#"
                className="pagination-active pagination-nav"
              >
                2 <span className="visually-hidden">(current)</span>
              </MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink className="pagination-nav" href="#">
                3
              </MDBPaginationLink>
            </MDBPaginationItem>
            <MDBPaginationItem>
              <MDBPaginationLink className="pagination-nav" href="#">
                Next
              </MDBPaginationLink>
            </MDBPaginationItem>
          </MDBPagination>
        </nav>
        <Outlet />
      </MDBContainer>
    </>
  );
}
