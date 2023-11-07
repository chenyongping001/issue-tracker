import Pagination from "./components/Pagination";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <Pagination
      currentPage={searchParams.page ? parseInt(searchParams.page) : 1}
      pageSize={10}
      itemCount={29}
    />
  );
}
