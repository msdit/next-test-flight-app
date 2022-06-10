export default fetch(
  "https://ws.alibaba.ir/api/v1/flightInfo/THR/departure"
).then((res) => res.json());
