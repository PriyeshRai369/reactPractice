import React from "react";

function ElementOne() {
  return (
    <div className="container my-5">
      <div className="position-relative p-5 text-center text-muted bg-body border border-dashed rounded-5">
        <button
          type="button"
          className="position-absolute top-0 end-0 p-3 m-3 btn-close bg-secondary bg-opacity-10 rounded-pill"
          aria-label="Close"
        ></button>
        <svg className="bi mt-5 mb-3" width="48" height="48">
          <use xlink:href="#check2-circle"></use>
        </svg>
        <h1 className="text-body-emphasis">Placeholder jumbotron</h1>
        <p className="col-lg-6 mx-auto mb-4">
          This faded back jumbotron is useful for placeholder content. It's also
          a great way to add a bit of context to a page or section when no
          content is available and to encourage visitors to take a specific
          action.
        </p>
        <button className="btn btn-primary px-5 mb-5" type="button">
          Call to action
        </button>
      </div>
    </div>
  );
}

export default ElementOne;
