const Timeline: React.FC = () => {
  return (
    <>
      <div className="bg-white mb-5 mx-auto p-4 rounded-lg w-10/12">
        <p className="font-bold text-xl">Twitter Clone 作成</p>
        <p className="mb-4">HTML, CSS, JavaScriptの練習</p>
        <div className="border-t-2 flex justify-around py-2 text-xs w-full">
          <button className="font-bold"
          >いいね  10
          </button>
          <button>応募</button>
        </div>
      </div>
      <div className="bg-white mb-5 mx-auto p-4 rounded-lg w-10/12">
        <p className="font-bold text-xl">Todoアプリ開発</p>
        <p className="mb-4">React, TypeScriptの練習</p>
        <div className="flex justify-around">
          <div className="flex text-xs w-1/3">
            {/* <button className="bg-green-500 font-bold py-1 rounded-full text-white w-1/4" */}
            <button className="border-2 font-bold flex-grow  py-1 rounded-full"
            >いいね
            </button>
            <span className="ml-3 py-1"
            >20</span>
          </div>
          <div className="flex text-xs w-1/3">
            <button className="border-2 font-bold flex-grow py-1 rounded-full"
            >応募
            </button>
            <span className="ml-3 py-1"
            >3</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline;