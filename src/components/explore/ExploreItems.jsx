import React, { useState, useEffect, useCallback } from "react";
import { Link } from "react-router-dom";
import axios from "axios";
import ExpiryDate from "../UI/ExpiryDate";
import Skeleton from "../UI/Skeleton";

const ExploreItems = () => {
  const [exporeData, setExporeData] = useState([]);
  const [loading, setLoading] = useState(false);
  const [numberOfItems, setNumberOfItems] = useState(8);

  async function fetchAPI(filter = false) {
    const filterMessage = !filter ? "" : `?filter=${filter}`;
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/explore${filterMessage}`
    );
    setExporeData(data);
    setLoading(false);
  }

  const loadMoreItems = useCallback(() => {
    if (numberOfItems === 16) {
      return;
    }
    setNumberOfItems(numberOfItems + 4);
  }, [numberOfItems]);

  function changeFilter(d) {
    const value = document.getElementById("filter-items").value;
    fetchAPI(value);
  }

  useEffect(() => {
    setLoading(true);
    fetchAPI();
  }, []);

  return (
    <>
      <div>
        <select
          onChange={() => changeFilter(this)}
          id="filter-items"
          defaultValue=""
        >
          <option value="">Default</option>
          <option value="price_low_to_high">Price, Low to High</option>
          <option value="price_high_to_low">Price, High to Low</option>
          <option value="likes_high_to_low">Most liked</option>
        </select>
      </div>

      {!loading &&
        exporeData?.slice(0, numberOfItems).map((item) => (
          <div
            key={item.id}
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
          >
            <div className="nft__item">
              <div className="author_list_pp">
                <Link
                  to={`/author/${item.authorId}`}
                  data-bs-toggle="tooltip"
                  data-bs-placement="top"
                >
                  <img className="lazy" src={item.authorImage} alt="" />
                  <i className="fa fa-check"></i>
                </Link>
              </div>
              {item.expiryDate && <ExpiryDate item={item} />}

              <div className="nft__item_wrap">
                <div className="nft__item_extra">
                  <div className="nft__item_buttons">
                    <button>Buy Now</button>
                    <div className="nft__item_share">
                      <h4>Share</h4>
                      <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-facebook fa-lg"></i>
                      </a>
                      <a href="" target="_blank" rel="noreferrer">
                        <i className="fa fa-twitter fa-lg"></i>
                      </a>
                      <a href="">
                        <i className="fa fa-envelope fa-lg"></i>
                      </a>
                    </div>
                  </div>
                </div>
                <Link to="/item-details">
                  <img
                    src={item.nftImage}
                    className="lazy nft__item_preview"
                    alt=""
                  />
                </Link>
              </div>
              <div className="nft__item_info">
                <Link to="/item-details">
                  <h4>{item.title}</h4>
                </Link>
                <div className="nft__item_price">{item.price} ETH</div>
                <div className="nft__item_like">
                  <i className="fa fa-heart"></i>
                  <span>{item.likes}</span>
                </div>
              </div>
            </div>
          </div>
        ))}

      {loading &&
        new Array(8).fill(0).map((_, index) => (
          <div
            key={index}
            className="d-item col-lg-3 col-md-6 col-sm-6 col-xs-12"
            style={{ display: "block", backgroundSize: "cover" }}
          >
            <Skeleton width="100%" height="400px" />
          </div>
        ))}

      <div className="col-md-12 text-center">
        {numberOfItems !== 16 && !loading && (
          <Link
            to=""
            id="loadmore"
            className="btn-main lead"
            onClick={loadMoreItems}
          >
            Load more
          </Link>
        )}
      </div>
    </>
  );
};

export default ExploreItems;
