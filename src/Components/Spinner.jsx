import Spinner from "react-bootstrap/Spinner";

function Rspinner({ children }) {
  return (
    <div className="flex h-screen items-center justify-center">
      <Spinner animation="grow" role="status" variant="primary">
        <Spinner animation="grow" variant="success" />
      </Spinner>
      <span>{children}</span>
    </div>
  );
}

export default Rspinner;
