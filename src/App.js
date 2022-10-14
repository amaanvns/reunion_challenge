import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { propertiesForRent } from "./features/property/propertySlice";
import Properties from "./components/Properties";
import Navbar from "./components/Navbar";


function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(propertiesForRent());
  }, [dispatch]);
  const properties = useSelector((state) => state.property.property);
  console.log(properties);

  return (
    <div>
      <Navbar/>
      <Properties />
    </div>
  );
}

export default App;
