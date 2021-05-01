import { FilterButton } from "./index";

type Filters = {
  label: string;
  name: string;
}[];

const Filter: React.FC = () => {
  const filters: Filters = [
    {
      label: 'search',
      name: '探す',
    },
    {
      label: 'onGoing',
      name: '進行中',
    },
    {
      label: 'lookingFor',
      name: '募集中',
    },
    {
      label: 'applied',
      name: '応募済み',
    },
    {
      label: 'like',
      name: 'いいね',
    }
  ]

  return (
    <>
      <div className="mx-3 my-3 overflow-x-scroll whitespace-nowrap">
        {filters.map((filter, idx) => (
          <FilterButton key={idx} label={filter.label} name={filter.name} />
        ))}
      </div>
    </>
  )
}

export default Filter;
