import * as React from "react";
import "styles/generic.scss";
import { Layout, Table, ListItem, Modal } from "components";
import { fetchData } from "./functions";
import { headers } from "./data";
function App() {
  const [data, setData] = React.useState([]);
  const [shown, setShown] = React.useState(false);
  const [currentItem, setCurrentItem] = React.useState({});

  const handleClick = (item) => {
    setShown(!shown);
    setCurrentItem(item);
  };

  React.useEffect(() => {
    setData(fetchData());
  }, []);
  return (
    <Layout>
      <Table data={data} headers={headers} handleClick={handleClick} />
      <ListItem data={data} headers={headers} handleClick={handleClick} />
      {shown && <Modal data={currentItem} shown={shown} setShown={setShown} />}
    </Layout>
  );
}

export default App;
