import Header from "./Header";
import TshirtCard from "./TshirtCard";
// components are imported using self closing tag.
function App() {
  return (
    <section>
      <Header />
      <div style={{ display: "flex" }}>
        <TshirtCard />
      </div>
    </section>
  );
}

export default App;
