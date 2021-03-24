import React, { useState, useEffect } from "react";
import './page.scss';

const styles = {
  inputWrapper: {
    marginTop: 20,
    display: 'flex',
    justifyContent: 'center',
  },
  output: {
    marginTop: 20,
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
}

const Page = () => {
  const [info, setInfo] = useState([]);
  const [inputValue, setInputValue] = useState('');
  const [output, setOutput] = useState([]);
  const [strictCase, setStrictCase] = useState(true);
  const proxyUrl = 'https://cors-anywhere.herokuapp.com/';
  const targetUrl = 'https://www.mrsoft.by/data.json';

  useEffect(() => {
    fetch(proxyUrl + targetUrl)
    .then(response => response.json())
    .then(data => setInfo(data.data))
    .catch(error => console.log(error))
  }, []);

  const lengthOnClickHandler = () => {
  setOutput(info.filter(item => item.length > parseInt(inputValue, 10)));
  setInputValue('');
  }

  const substringClickHandler = () => {
    if (strictCase) {
      setOutput(info.filter(item => item.includes(inputValue)));
    } else {
      setOutput(info.filter(item => item.toLowerCase().includes(inputValue.toLowerCase())));
    }
    setInputValue(''); 
  }

  return (
    <div>
      <div style={styles.inputWrapper}>
        <input type="text"  value={inputValue} onChange={e => setInputValue(e.target.value)}/>
      </div>
      <label style={styles.inputWrapper}>
        Case Mode {strictCase ? 'On' : 'Off'}
        <input type="checkbox" onChange={() => setStrictCase(!strictCase)}/>
      </label>
      <div style={styles.inputWrapper}>
        <input type="button" value="String length" onClick={lengthOnClickHandler}/>
        <input type="button" value="Substring" onClick={substringClickHandler} />
      </div>
      <div style={styles.output}>{output.map(item => {
        return <div>{item}</div>
      })}</div>
    </div>
  );
};

export default Page;
