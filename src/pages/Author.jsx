import AuthorBanner from "../images/author_banner.jpg";
import React, { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import axios from "axios";
import AuthorItems from "../components/author/AuthorItems";
import Skeleton from "../components/UI/Skeleton";

const Author = () => {
  let { authorId } = useParams();
  const [authorData, setAuthorData] = useState({});
  const [loading, setLoading] = useState(false);
  const [followed, setFollowed] = useState(false);

  function followAuthor() {
    !followed ? setFollowed(true) : setFollowed(false);
  }

  async function fetchAPI() {
    const { data } = await axios.get(
      `https://us-central1-nft-cloud-functions.cloudfunctions.net/authors?author=${authorId}`
    );
    setAuthorData(data);
    setLoading(false);
    console.log(data);
  }

  useEffect(() => {
    setLoading(true);
    fetchAPI();
    return () => {
      setAuthorData({});
      setLoading(false);
    };
  }, [authorId]);

  return (
    <div id="wrapper">
      <div className="no-bottom no-top" id="content">
        <div id="top"></div>

        {!loading && (
          <>
            <section
              id="profile_banner"
              aria-label="section"
              className="text-light"
              data-bgimage="url(images/author_banner.jpg) top"
              style={{ background: `url(${AuthorBanner}) top` }}
            ></section>
            <section aria-label="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d_profile de-flex">
                      <div className="de-flex-col">
                        <div className="profile_avatar">
                          <img src={authorData?.authorImage} alt="" />

                          <i className="fa fa-check"></i>
                          <div className="profile_name">
                            <h4>
                              {authorData.authorName}
                              <span className="profile_username">
                                @{authorData?.tag}
                              </span>
                              <span id="wallet" className="profile_wallet">
                                {authorData?.address}
                              </span>
                              <button id="btn_copy" title="Copy Text">
                                Copy
                              </button>
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="profile_follow de-flex">
                        <div className="de-flex-col">
                          <div className="profile_follower">
                            {authorData?.followers + (!followed ? 0 : 1)}{" "}
                            followers
                          </div>
                          <Link
                            to="#"
                            className="btn-main"
                            onClick={() => followAuthor()}
                          >
                            {!followed ? "Follow" : "Unfollow"}
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="de_tab tab_simple">
                      <AuthorItems
                        authorImage={authorData.authorImage}
                        nftCollection={authorData.nftCollection}
                        loading={loading}
                      />
                    </div>
                  </div>
                </div>
              </div>
            </section>{" "}
          </>
        )}

        {loading && (
          <>
            <section
              id="profile_banner"
              aria-label="section"
              className="text-light"
              data-bgimage="url(images/author_banner.jpg) top"
              style={{ background: `url(${AuthorBanner}) top` }}
            ></section>

            <section aria-label="section">
              <div className="container">
                <div className="row">
                  <div className="col-md-12">
                    <div className="d_profile de-flex">
                      <div className="de-flex-col">
                        <div className="profile_avatar">
                          <Skeleton height="150px" width="150px"
                          borderRadius="50%" />

                          <i className="fa fa-check"></i>
                          <div className="profile_name">
                            <h4>
                              <Skeleton width="200px" />
                              <span className="profile_username">
                                <Skeleton width="100px"/>
                              </span>
                              <span id="wallet" className="profile_wallet">
                                <Skeleton width="200px" />
                              </span>
                  
                            </h4>
                          </div>
                        </div>
                      </div>
                      <div className="profile_follow de-flex">
                        <div className="de-flex-col">
                          <Skeleton width="150px" height="40px" />
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="col-md-12">
                    <div className="de_tab tab_simple">
                      <AuthorItems
                        authorImage={authorData.authorImage}
                        nftCollection={authorData.nftCollection}
                        loading={loading}
                      />
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

export default Author;
