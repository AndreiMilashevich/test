import React, { useEffect } from "react";

const Page = () => {
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = 'https://www.mrsoft.by/data.json';
  useEffect(() => {
    fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(data => console.log(data))
    .catch(error => console.log(error))
  }, [])
  return (
    <div>
      <div>
        <input type="text" name="" id="" />
      </div>
      <label>
        Case Mode
        <input type="checkbox" name="" id="" />
      </label>
      <div>
        <input type="button" value="String length" />
        <input type="button" value="Substring" />
      </div>
      <div className="output"></div>
    </div>
  );
};

export default Page;
