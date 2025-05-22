import React from "react";
import Container from "../../components/common/Container";
import SideBar from "../../components/sidebar";
import Card from "../../components/job_card";
import useFetch from "../../hooks/useFetch";

const Home = () => {
  const { visibleData, loading, loadMore, hasMore } = useFetch(
    import.meta.env.VITE_API_URL,
    8
  );
  const regex = /(<([^>]+)>)/gi;
  return (
    <main>
      <Container>
        <div className="lg:flex md:gap-x-5 -mx-4">
          <SideBar />
          <div className="lg:w-3/4 px-4">
            Listings
            <div className="-mx-4">
              {visibleData &&
                visibleData.map(
                  ({
                    slug,
                    title,
                    company_name,
                    location,
                    description,
                    remote,
                    url,
                    created_at,
                  }) => (
                    <Card
                      key={slug}
                      title={title}
                      company_name={company_name}
                      location={location}
                      description={`${description
                        .replace(regex, "")
                        .substring(0, 300)}...`}
                      remote={remote}
                      url={url}
                      date={created_at}
                    />
                  )
                )}
            </div>
            {hasMore && (
              <button type="button" onClick={loadMore}>
                Load More...
              </button>
            )}
          </div>
        </div>
      </Container>
    </main>
  );
};

export default Home;
