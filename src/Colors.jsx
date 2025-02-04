function Colors = ({ items }) => {
    return (
      <ul>
        {items.map((item) => (
          <Color key={item.id} item={item} />
        ))}
      </ul>
    );
  };
  
  
  export default App;
  