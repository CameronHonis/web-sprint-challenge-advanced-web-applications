import React, { useState, useEffect } from "react";
import useApi from '../hooks/useApi'
import { axiosWithAuth } from '../axiosBuilds'

import Bubbles from "./Bubbles";
import ColorList from "./ColorList";

const BubblePage = () => {
  const [colorList, setColorList] = useState([]);
  const [apiData, fireApi] = useApi('get')
  // fetch your colors data from the server when the component mounts
  // set that data to the colorList state property

  useEffect(() => {
    fireApi()
  },[])
  useEffect(() => {
    if (apiData){
      setColorList(apiData)
    }
  },[apiData])

  return (
    <>
      <ColorList colors={colorList} updateColors={setColorList} />
      <Bubbles colors={colorList} />
    </>
  );
};

export default BubblePage;
