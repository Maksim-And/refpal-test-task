import Container from "./components/Container/Container";
import Header from "./components/Header/Header";
import IncidentTable from "./components/IncidentTable/IncidentTable";
import Error from "./components/ui/Error/Error";
import Spinner from "./components/ui/Spinner/Spinner";
import { useFetch } from "./hooks/useFetch";
import { IncidentTopic } from "./types";

function App() {
  const { data, isLoading, error } = useFetch<IncidentTopic[] | undefined>(
    "/incidentTopic.json",
  );

  if (error) {
    return <Error />;
  }

  return (
    <section className="flex justify-center w-full bg-gradient-to-r from-gray-500/20 to-gray-800/20 min-h-screen p-2">
      <Container>
        {isLoading ? (
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
