import { MDBBtn } from "mdb-react-ui-kit";
export const SucsessPage = () => {
  return (
    <>
      <div>Success!</div>
      <MDBBtn onClick={() => window.location.reload()}>Create Again</MDBBtn>
    </>
  );
};
