import logo from "./logo.svg";
import "./App.css";
import Customer from "./components/customer";

const customers = [
  {
    id: 1,
    name: "홍길동",
    image:
      "https://img1.daumcdn.net/thumb/C500x500.fpng/?fname=http://t1.daumcdn.net/brunch/service/user/6qYm/image/eAFjiZeA-fGh8Y327AH7oTQIsxQ.png",
    gender: "male",
    birthday: "19910904",
    job: "thief",
  },
  {
    id: 2,
    name: "풍월량",
    image: "https://cdn.gametoc.co.kr/news/photo/201710/45338_85463_759.JPG",
    gender: "male",
    birthday: "19840124",
    job: "bj",
  },
  {
    id: 3,
    name: "침착맨",
    image:
      "https://w.namu.la/s/2cd5110fc9e9e2f8c67f05fa5fb1d7f20957a29c80203d0c63864960640fd8b7d618ee394c9efb04d0da86512ea9a7b6a9adb7422ea2c82051286c31c975c3351ba05ed8dfabe0b3be5520292e8e09bd",
    gender: "male",
    birthday: "19870902",
    job: "streamer",
  },
];

function App() {
  return (
    <div className="App">
      {customers.map((c) => {
        return (
          <Customer
            id={c.id}
            name={c.name}
            image={c.image}
            gender={c.gender}
            birthday={c.birthday}
            job={c.job}
          />
        );
      })}
    </div>
  );
}

export default App;
