type Props = {
  label: string;
  name: string;
  timeline: string;
  handleFilterButtonClick: (label: string) => void;
}

const FilterButton: React.FC<Props> = ({ label, name, timeline, handleFilterButtonClick }) => {
  return (
    <>
      <button
        className={`bg-white font-bold flex-1 ml-4 px-4 py-2 rounded-full ${(timeline === label) ? "bg-gray-300 text-gray-500" : "bg-white" }`}
        onClick={() => handleFilterButtonClick(label)}
      >{name}
      </button>
    </>
  )
}

export default FilterButton;