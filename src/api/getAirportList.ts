export default fetch("https://ws.alibaba.ir/api/v1/flightInfo/airports").then(
  (res) => res.json()
);
