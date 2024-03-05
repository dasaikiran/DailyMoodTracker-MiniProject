import Header from '../Header'

import './index.css'

const NotFound = () => (
  <>
    <Header />
    <div className="not-found-body">
      <div className="not-found-container">
        <img className="not-found-img" src="https://res.cloudinary.com/dprsnmrbp/image/upload/v1709676545/Group_7504_qt2g1a.jpg" alt="not found" />
        <h1 className="not-found-heading">Page Not Found.</h1>
        <p className="not-found-para">
          We are sorry, the page you requested could not be found.
        </p>
      </div>
    </div>
  </>
)

export default NotFound
