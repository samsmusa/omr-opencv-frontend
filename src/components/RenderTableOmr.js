import axios from "axios";
import React from "react";
import Table from "./Table";

export default function RenderTableOmr({ reload }) {
  const [exams, setExams] = React.useState([]);

  React.useEffect(() => {
    const url = "http://127.0.0.1:8000/omr/anonymous-upload/";
    axios.get(url).then((response) => {
      console.log(response);
      setExams(response.data);
    });
  }, [reload]);
  return <Table data={exams} />;
}
