import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  const items = ["New York", "Los Angeles", "Chicago", "Houston"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  return (
    <div>
      <Button text="test" className="btn-secondary"/>
      <ListGroup
        items={items}
        heading="Cities"
        onSelectItem={handleSelectItem}
      />
    </div>
  );
}

export default App;
