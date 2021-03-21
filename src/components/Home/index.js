import React, { useState } from "react";
import { Table, Button } from "antd";
import { getData } from "../../services/index";
import RafaCard from "../Card/index";
const columns = [
  {
    title: "Estado",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "Fecha",
    dataIndex: "date",
    key: "date",
  },
  {
    title: "Temperatura",
    dataIndex: "tempc",
    key: "tempc",
  },
];

function Home() {
  const [data, setNewData] = useState([]);

  const setData = () => {
    getData(
      "https://api.datos.gob.mx/v1/condiciones-atmosfericas?pageSize=1000"
    ).then((response) => {
      let array = [];
      response.map((element) => {
        let object = {
          key: element._id,
          name: element.name,
          date: element.lastreporttime,
          tempc: element.tempc,
        };
        array.push(object);
      });
      setNewData(array);
    });
  };

  return (
    <div>
      <h1>Título de tabla</h1>

      {data !== undefined ? (
        <Table dataSource={data} columns={columns} />
      ) : (
        <h1>No hay datos aún </h1>
      )}
      <Button type="primary" onClick={() => setData()} danger>
        Presióname
      </Button>
      {data !== undefined ? <RafaCard data={data} /> : <></>}
    </div>
  );
}

export default Home;
