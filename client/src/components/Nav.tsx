export const Nav = () => (
  <section>
    <nav className="navbar navbar-dark navbar-expand-lg bg-white py-5 py-lg-3 px-5">
      <div className="container-fluid">
        <a className="navbar-brand" href="/">
          <img
            className="img-fluid"
            src="gradia-assets/logos/gradia-name-black.svg"
            alt=""
          />
        </a>
        <div className="collapse navbar-collapse me-5 justify-content-end">
          <ul className="navbar-nav">
            <li className="nav-item p-5">
              <a className="nav-link d-inline-block p-0" href="/">
                <h3 className="fs-17 fw-medium text-secondary mb-0">Features</h3>
              </a>
            </li>
            <li className="nav-item p-5">
              <a className="nav-link d-inline-block p-0" href="/">
                <h3 className="fs-17 fw-medium text-secondary mb-0">Solutions</h3>
              </a>
            </li>
            <li className="nav-item p-5">
              <a className="nav-link d-inline-block p-0" href="/">
                <h3 className="fs-17 fw-medium text-secondary mb-0">Features</h3>
              </a>
            </li>
            <li className="nav-item p-5">
              <a className="nav-link d-inline-block p-0" href="/">
                <h3 className="fs-17 fw-medium text-secondary mb-0">Pricing</h3>
              </a>
            </li>
          </ul>
        </div>
        <div className="d-none d-lg-block">
          <div
            className="rounded-3"
            style={{
              padding: '2px',
              background:
                'linear-gradient(90deg, rgba(108,213,246,1 ) 0%, rgba(248,157,92,1) 50%, rgba(91,106,240,1) 100%)',
            }}
          >
            <button className="btn btn-light px-4 py-3 rounded-1" type="button">
              <h4 className="fs-17 fw-medium text-secondary mb-0">Start Free Trial</h4>
            </button>
          </div>
        </div>
        <div className="d-lg-none">
          <button className="btn navbar-burger p-0">
            <svg
              className="text-dark-light"
              width="51"
              height="51"
              viewBox="0 0 56 56"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <rect width="56" height="56" rx="28" fill="currentColor"></rect>
              <path
                d="M37 32H19M37 24H19"
                stroke="white"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </button>
        </div>
      </div>
    </nav>
    <div
      className="d-none navbar-menu position-fixed top-0 start-0 bottom-0 w-75 mw-xs"
      style={{ zIndex: '9999' }}
    >
      <div
        className="navbar-close navbar-backdrop position-fixed top-0 start-0 end-0 bottom-0 bg-dark"
        style={{ opacity: '75%' }}
      ></div>
      <nav className="position-relative h-100 w-100 d-flex flex-column justify-content-between py-8 px-8 bg-white overflow-auto">
        <div className="d-flex align-items-center">
          <a className="me-auto h4 mb-0 text-decoration-none" href="/">
            <img
              className="img-fluid"
              src="gradia-assets/logos/gradia-name-black.svg"
              alt=""
            />
          </a>
          <a className="navbar-close" href="/">
            <svg
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6 18L18 6M6 6L18 18"
                stroke="#111827"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </a>
        </div>
        <div className="py-16">
          <ul className="nav flex-column">
            <li className="nav-item mb-12">
              <a className="nav-link d-inline-block p-0" href="/">
                <h3 className="fs-17 fw-medium text-secondary mb-0">Features</h3>
              </a>
            </li>
            <li className="nav-item mb-12">
              <a className="nav-link d-inline-block p-0" href="/">
                <h3 className="fs-17 fw-medium text-secondary mb-0">Solutions</h3>
              </a>
            </li>
            <li className="nav-item mb-12">
              <a className="nav-link d-inline-block p-0" href="/">
                <h3 className="fs-17 fw-medium text-secondary mb-0">Resources</h3>
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link d-inline-block p-0" href="/">
                <h3 className="fs-17 fw-medium text-secondary mb-0">Pricing</h3>
              </a>
            </li>
          </ul>
        </div>
        <div>
          <button className="btn btn-light px-4 py-3 w-100 mb-5 rounded-1" type="button">
            <h4 className="fs-17 fw-medium text-secondary mb-0">Login</h4>
          </button>
          <div
            className="d-inline-block w-100 rounded-3"
            style={{
              padding: '2px',
              background:
                'linear-gradient(90deg, rgba(108,213,246,1 ) 0%, rgba(248,157,92,1) 50%, rgba(91,106,240,1) 100%)',
            }}
          >
            <button className="btn btn-light px-4 py-3 w-100 rounded-1" type="button">
              <h4 className="fs-17 fw-medium text-secondary mb-0">Start Free Trial</h4>
            </button>
          </div>
        </div>
      </nav>
    </div>
  </section>
);
