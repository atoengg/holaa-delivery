import React, { useEffect, useState } from "react";
import CommonSection from "../../components/UI/Common/CommonSection";
import notFoundImg from "../../assets/img/404.jpg";
import axios, { all } from "axios";
import { FaSearch } from "react-icons/fa";
import PropagateLoader from "react-spinners/PropagateLoader";
import ProductCard from "../../components/UI/Product-Card/ProductCard";
import ReactPaginate from "react-paginate";

const Menu = () => {
  const [allProducts, setAllProducts] = useState([]);

  const [inputSearch, setInputSearch] = useState("");

  const [pageNumber, setPageNumber] = useState(0);

  const apiUrl = import.meta.env.VITE_API_URL;

  const [loading, setLoading] = useState(true);

  const searchProduct = allProducts?.filter((item) => {
    if (inputSearch.value === "") return item;
    if (item.title.toLowerCase().includes(inputSearch.toLowerCase()))
      return item;
  });

  const productPerPage = 8;
  const visitedPage = pageNumber * productPerPage;
  const displayPage = searchProduct.slice(
    visitedPage,
    visitedPage + productPerPage
  );
  const pageCount = Math.ceil(searchProduct.length / productPerPage);

  const changePage = ({ selected }) => {
    setPageNumber(selected);
  };

  useEffect(() => {
    setLoading(true);

    axios
      .get(`${apiUrl}/products`)
      .then((res) => {
        setAllProducts(res.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
        setLoading(false);
      });
  }, []);

  return (
    <div>
      <CommonSection title="All Menus" />

      <section className="container mx-auto px-8 py-12 md:px-6 ">
        <div className="flex items-center justify-between w-4/12 border border-slate-400 rounded-md py-2 px-4">
          <input
            type="text"
            className="focus:border-none focus:outline-none font-normal text-base w-full"
            value={inputSearch}
            onChange={(e) => setInputSearch(e.target.value)}
            name="search"
            id="search"
            placeholder="Cari Menu kesukaanmu..."
          />
          <span>
            <FaSearch style={{ color: "#94a3b8" }} />
          </span>
        </div>

        {/*  menampilkan seluruh menu */}
        <div className="grid grid-cols-4 gap-4 mt-8">
          {loading ? (
            <div className="flex justify-center items-center col-span-4 my-5">
              <PropagateLoader
                color={"#f87171"}
                loading={loading}
                size={15}
                aria-label="Loading Spinner"
                data-testid="loader"
              />
            </div>
          ) : searchProduct.length > 0 ? (
            displayPage?.map((item) => (
              <div
                className="border border-solid shadow-md rounded-lg"
                key={item.id}
              >
                <ProductCard item={item} />
              </div>
            ))
          ) : (
            <div className="text-center flex flex-col items-center col-span-1">
              <img src={notFoundImg} alt="Not Found" className="" />
              <p className="font-semibold text-xl">
                {" "}
                Opss.. Menu tidak tersedia
              </p>
            </div>
          )}
        </div>
        <div className="mt-8">
          <ReactPaginate
            pageCount={pageCount}
            onPageChange={changePage}
            previousLabel={"Prev"}
            nextLabel={"Next"}
            className="w-4/5 h-10 m-auto flex items-center justify-center gap-2 paginationBtn"
          />
        </div>
      </section>
    </div>
  );
};

export default Menu;
