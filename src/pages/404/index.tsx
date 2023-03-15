import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className=" wrapper-content">
      <div className="flex items-center justify-center h-screen flex-cols">
        <div>
          <h1 className="mb-8 text-2xl text-center">Nothing to see here!</h1>
          <div className="text-center">
            <Link className="btn" to="/">Go to the home page</Link>
          </div>
        </div>
      </div>
    </div>
  );
}

export default NoMatch