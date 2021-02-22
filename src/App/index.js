import * as React from "react";
import "styles/generic.scss";
import { Layout, Table, ListItem } from "components";
import Edit from "./editForm";
import { fetchData } from "./functions";
import { headers } from "./data";

function App() {
  const [data, setData] = React.useState([]);
  const [shown, setShown] = React.useState(false);
  const [currentItem, setCurrentItem] = React.useState({});

  const handleClick = (item) => {
    setCurrentItem(item);
    setShown(!shown);

  };

  React.useEffect(() => {
    setData(fetchData());
  }, []);
  return (
    <Layout>
      <Table data={data} headers={headers} handleClick={handleClick} />
      <ListItem data={data} headers={headers} handleClick={handleClick} />
      {shown && <Edit data={currentItem} setShown={setShown} shown={shown} />}
    </Layout>
  );
}

export default App;
