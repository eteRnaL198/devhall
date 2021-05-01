import { FilterButton } from "./index";

type Filters = string[];

const Filter: React.FC = () => {
  const filters: Filters = ['search', 'onGoing'];

  return (
    <>
      <div className="flex justify-around mx-3 my-3 overflow-x-scroll">
        {filters.map((filter, idx) => (
          <FilterButton label={filter} key={idx}/>
        ))}
      </div>
    </>
  )
}

export default Filter;
