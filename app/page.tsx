import Pagination from "./components/Pagination";

export default function Home() {
  return <Pagination currentPage={3} pageSize={10} itemCount={29} />;
}
