type Props = {
  timeline: string;
}

type A = {
  label: string,
  name: string,
  count: number,
}
type B = {
  label: string,
}
type C = A | B;
// 探す, 募集中， 応募済み， いいね {
//   詳細
//   いいね
//   応募
// }
// 進行中 {
//   詳細
//   ボード
//   メッセージ
// }

const Timeline: React.FC<Props> = ({ timeline }) => {
  return (
    <>
      <div className="bg-white mb-5 mx-auto p-4 rounded-lg w-10/12">
        <p className="font-bold text-xl">Todoアプリ開発</p>
        <p className="mb-4">React, TypeScriptの練習</p>
        <div className="flex justify-around">
          <div className="flex text-xs w-1/4">
            <button className="border-2 font-bold flex-grow  py-1 rounded-full focus:outline-none"
            >詳細
            </button>
          </div>
          <div className="flex text-xs w-1/4">
            <button className="border-2 font-bold flex-grow  py-1 rounded-full focus:outline-none"
            >いいね
            </button>
            <span className="ml-2 py-1"
            >20
            </span>
          </div>
          <div className="flex text-xs w-1/4">
            <button className="border-2 font-bold flex-grow  py-1 rounded-full focus:outline-none"
            >応募
            </button>
            <span className="ml-2 py-1"
            >3
            </span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline;