import Container from "./components/Container";
import Header from "./components/Header";
import IncidentTable from "./components/IncidentTable";
import Error from "./components/ui/Error";
import Spinner from "./components/ui/Spinner";
import { useFetch } from "./hooks/useFetch";
import { IncidentTopic } from "./types";

function App() {
  const { data, loading, error } = useFetch<IncidentTopic[]>(
    "/incidentTopic.json",
  );

  if (error) {
    return <Error />;
  }

  return (
    <section className="flex justify-center w-full bg-gradient-to-r from-gray-500/20 to-gray-800/20 min-h-screen p-2">
      <Container>
        {loading ? (
          <div className="flex w-full justify-center items-center h-60">
            <Spinner />
          </div>
        ) : (
          <>
            <Header />
            <IncidentTable data={data} />
          </>
        )}
      </Container>
    </section>
  );
}

export default App;
