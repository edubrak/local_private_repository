function SearchPageHeader() {
  return (
    <>
      <div className="row bg-danger justify-content-center">
        <div className="col-10 d-flex justify-content-between py-2">
          <p className="m-0 brand">e!</p>
          <div>
            <button className="btn text-white">Login</button>
            <button className="btn btn-outline-light">
              <i className="fa fa-search" aria-hidden="true"></i>Create a
              Account
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SearchPageHeader;
