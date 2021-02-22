'use strict';

import Standard from "./Components/02-Parents-Child/Standard";
import Introduction from "./Components/01-Intro/First";
import Second from "./Components/01-Intro/Second";

const App = () => {
  return (
    <div className="App">
      <p>Sav says hi </p>
      {/* <Introduction/> */}
      {/* <Second/>*/}
      <Standard/> 
    </div>
  );
}

export default App;
