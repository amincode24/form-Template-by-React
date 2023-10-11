import { Fragment, useState } from "react";
import "./App.css";
import Login from "./components/Login/Login";
import Signin from "./components/Signin/Signin";
function App() {
  const [showModal, setShowModal] = useState(false);

  const ShowModalHandler = () => {
    setShowModal(true);
  };

  const HideModalHandler = () => {
    setShowModal(false);
  };

  return (
    <Fragment>
        {showModal && (
          <Signin onCloseModal={HideModalHandler} />
        )}
          <Login onShowModal={ShowModalHandler} />
    </Fragment>
  );
}

export default App;
