type Props = {
  label: string;
}
const FilterButton: React.FC<Props> = ({ label }) => {
  return (
    <>
      <button
        className="bg-white flex-1 font-bold mx-2 px-2 rounded-full"
      >
        {
          (label === "search") ? "探す" :
          (label === "onGoing") ? "進行中" : null
          // TODO: このやり方以外無いのか．結合度高くね？
        }
      </button>
      {/* 募集中
      応募済
      いいね */}
    </>
  )
}

export default FilterButton;