import Container from "./components/Container";
import Header from "./components/Header";
import IncidentTable from "./components/IncidentTable";

function App() {
  return (
    <section className="flex justify-center w-full bg-gradient-to-r from-gray-500/20 to-gray-800/20 min-h-screen p-2">
      <Container>
        <Header />
        <IncidentTable />
      </Container>
    </section>
  );
}

export default App;
