import React, { useEffect, useState } from "react";
import axios from "axios";
import Card from "./components/Card";
import GalleryLayout from "./components/GalleryLayout";

const App = () => {
  const [userdata, setUserdata] = useState([]);

  const [index, setIndex] = useState(1);

  const getData = async () => {
    const response = await axios.get(
      `https://picsum.photos/v2/list?page=${index}&limit=12`,
    );

    setUserdata(response.data);
  };

  useEffect(
    function () {
      getData();
    },
    [index],
  );

  let printUserData = (
    <div className="flex justify-center items-center w-full min-h-[50vh]">
      <h3 className="text-gray-500 text-2xl font-semibold">Loading...</h3>
    </div>
  );

  if (userdata.length > 0) {
    printUserData = userdata.map(function (elem, idx) {
      return (
        <div key={elem.id}>
          <Card elem={elem} />
        </div>
      );
    });
  }

  return (
    <GalleryLayout
      printUserData={printUserData}
      index={index}
      setIndex={setIndex}
      setUserdata={setUserdata}
    />
  );
};

export default App;
