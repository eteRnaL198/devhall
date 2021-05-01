type Props = {
  label: string;
  name: string;
}

const FilterButton: React.FC<Props> = ({ label, name }) => {
  return (
    <>
      <button
        className="bg-white font-bold inline-block mx-4 px-4 py-2 rounded-full w-24"
      >{name}
      </button>
    </>
  )
}

export default FilterButton;