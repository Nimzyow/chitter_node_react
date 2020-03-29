import React, { useEffect, Fragment, useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import M from "materialize-css/dist/js/materialize.min.js";
import NavBar from "./component/navBar/navBar";
import ActionButton from "./component/actionButton/actionButton";
import Peeps from "./component/peeps/peeps";

const App = () => {
  const [test, setTest] = useState(true);
  const [textTest, setTextTest] = useState("Hello world!");

  useEffect(() => {
    //initialises materialize javascript
    M.AutoInit();
  });

  useEffect(() => {
    test ? setTextTest("Hello world!") : setTextTest("Let's make a peep");
  }, [test]);

  const peepSwitch = () => {
    setTest(!test);
  };

  return (
    <Fragment>
      <NavBar />
      <Peeps textTest={textTest} />
      <ActionButton test={test} peepSwitch={() => peepSwitch()} />
    </Fragment>
  );
};

export default App;
