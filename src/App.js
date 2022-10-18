import axios from "axios";

export default function App() {
  const getData = () => {
    let a = {
      "code": "4e04d868-c8c3-4819-92e3-5e9f26c3748a"
    };
      let b = {
      "page": 0,
      "perPage": 20
    }
    axios
      .post("https://smart.adliya.uz/api/v1/id-gov/integration", a)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });    axios
      .post("https://smart.adliya.uz/api/v1/front/legal-literacy/list", b)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });    
      axios
      .get("https://smart.adliya.uz/api/v1/front/logs?page=0&perPage=10")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get("https://smart.adliya.uz/api/v1/front/logs")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
      axios
      .get("http://kun.uz")
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  return (
    <div className="App">
      {getData()}
      <h1>Hello CodeSandbox</h1>
      <h2>Start editing to see some magic happen!</h2>
      <button onClick={() => getData()}>Click</button>
    </div>
  );
}
