type Props = {
  label: string;
  name: string;
}

const FilterButton: React.FC<Props> = ({ label, name }) => {
  return (
    <>
      <button
        className="bg-white font-bold flex-1 ml-4 px-4 py-2 rounded-full"
      >{name}
      </button>
    </>
  )
}

export default FilterButton;