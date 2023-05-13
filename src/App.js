import Item from "./item";
import Title from "./Title";

function App() {
  let arr = [
    {
      title: "rabithole",
      button: "submit",
      para : "babul the great",
    },
    {
      title: "bithole",
      button: "addon",
      para : "ankur the great",
    },
    {
      title: "rithole",
      button: "login",
      para : "chotu the great",
    },
  ];

  return (
    <>
      <Item button={arr[0].button}></Item>
      <Title title={arr[0].title}></Title>
      <Title para={arr[0].para}></Title>
      <Item button={arr[1].button}></Item>
      <Title title={arr[1].title}></Title>
      <Title para={arr[1].para}></Title>
      <Item button={arr[2].button}></Item>
      <Title title={arr[2].title}></Title>
      <Title para={arr[2].para}></Title>
    </>
  );
}

export default App;
