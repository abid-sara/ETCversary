import { useState } from "react";
import Footer from "./footer.jsx";  // Import the Footer component
import AboutETC from "./AboutETC.jsx";
function App() {
  return (
    <>
      {/* Apply custom blue background */}
      <div className="bg-blueCustom font-primary text-white p-4">
        {/* <div>
        Hello this is a test
      </div>
      <div >
        test text Lorem ipsum, dolor sit amet consectetur adipisicing elit.
        Nulla non excepturi vero mollitia enim nobis nostrum expedita neque cum.
        Unde quidem molestiae harum eos natus amet iste accusamus eveniet in!
       
      </div> */}
      <AboutETC />
      <Footer />
      </div>
      {/* Add Footer component here */}
       {/* This will render the Footer component */}
    </>
  );
}

export default App;