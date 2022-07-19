import React, { useEffect, useState } from 'react';
import axios from 'axios';
import styled from 'styled-components';

export default function Main() {
  const [productList, setProductList] = useState([]);
  useEffect(() => {
    (async function getData() {
      const res = await axios.get('https://openmarket.weniv.co.kr/products');
      setProductList(res.data.results);
      console.log(res.data.results);
    })();
  }, []);

  return <Container></Container>;
}

const Container = styled.section`
  padding: 0 100px;
`;
