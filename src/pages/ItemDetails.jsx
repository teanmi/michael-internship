import React, { useEffect, useState } from "react";
import EthImage from "../images/ethereum.svg";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import Skeleton from "../components/UI/Skeleton";

const ItemDetails = () => {
  const { itemId } = useParams();

  const [itemData, setItemData] = useState({});
  const [loading, setLoading] = useState(false);

  async function fetchApi() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/itemDetails?nftId=${itemId}`
    );
    setItemData(data);
    setLoading(false);
    console.log(data);
  }

  useEffect(() => {
    window.scrollTo(0, 0);
    setLoading(true);
    fetchApi();

    return () => {
      setLoading(false);
      setItemData({});
    };
  }, [itemId]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        {loading && (
          <>
            <div id="top"></div>
            <section aria-label="section" className="mt90 sm-mt-0">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <img
                      src={itemData?.nftImage}
                      className="img-fluid img-rounded mb-sm-30 nft-image"
                      alt=""
                    />
                  </div>
                  <div className="col-md-6">
                    <div className="item_info">
                      <h2>
                        {itemData?.title} #{itemData?.tag}
                      </h2>

                      <div className="item_info_counts">
                        <div className="item_info_views">
                          <i className="fa fa-eye"></i>
                          {itemData?.views}
                        </div>
                        <div className="item_info_like">
                          <i className="fa fa-heart"></i>
                          {itemData?.likes}
                        </div>
                      </div>
                      <p>{itemData?.description}</p>
                      <div className="d-flex flex-row">
                        <div className="mr40">
                          <h6>Owner</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <Link to={`/author/${itemData?.ownerId}`}>
                                <img
                                  className="lazy"
                                  src={itemData?.ownerImage}
                                  alt=""
                                />
                                <i className="fa fa-check"></i>
                              </Link>
                            </div>
                            <div className="author_list_info">
                              <Link to={`/author/${itemData?.ownerId}`}>
                                {itemData.ownerName}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div className="de_tab tab_simple">
                        <div className="de_tab_content">
                          <h6>Creator</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <Link to={`/author/${itemData?.creatorId}`}>
                                <img
                                  className="lazy"
                                  src={itemData?.creatorImage}
                                  alt=""
                                />
                                <i className="fa fa-check"></i>
                              </Link>
                            </div>
                            <div className="author_list_info">
                              <Link to={`/author/${itemData?.creatorId}`}>
                                {itemData?.creatorName}
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="spacer-40"></div>
                        <h6>Price</h6>
                        <div className="nft-item-price">
                          <img src={EthImage} alt="" />
                          <span>{itemData.price}</span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}

        {!loading && (
          <>
            <div id="top"></div>
            <section aria-label="section" className="mt90 sm-mt-0">
              <div className="container">
                <div className="row">
                  <div className="col-md-6 text-center">
                    <Skeleton width="100%" height="500px" />
                  </div>
                  <div className="col-md-6">
                    <div className="item_info">
                      <h2>
                        <Skeleton width="300px" />
                      </h2>

                      <div className="item_info_counts">
                        <Skeleton width="80px" height="30px" />
                        <Skeleton width="80px" height="30px" />
                      </div>
                      <Skeleton width="100%" height="100px" />
                      <div className="d-flex flex-row">
                        <div className="mr40">
                          <h6>Owner</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <Link to="">
                                <Skeleton
                                  width="50px"
                                  height="50px"
                                  borderRadius="50%"
                                />
                              </Link>
                            </div>
                            <div className="author_list_info">
                              <Link to="">
                                <Skeleton width="120px" height="20px" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div></div>
                      </div>
                      <div className="de_tab tab_simple">
                        <div className="de_tab_content">
                          <h6>Creator</h6>
                          <div className="item_author">
                            <div className="author_list_pp">
                              <Link to="">
                                <Skeleton
                                  width="50px"
                                  height="50px"
                                  borderRadius="50%"
                                />
                              </Link>
                            </div>
                            <div className="author_list_info">
                              <Link to="">
                                <Skeleton width="120px" height="20px" />
                              </Link>
                            </div>
                          </div>
                        </div>
                        <div className="spacer-40"></div>
                        <h6>Price</h6>
                        <div className="nft-item-price">
                          <Skeleton width="80px" height="18px" />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </section>
          </>
        )}
      </div>
    </div>
  );
};

export default ItemDetails;
