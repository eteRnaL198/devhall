type Props = {
  timeline: string;
}

type Button = {
  label: 'like',
  name: 'いいね',
  liked: string,
}
// 探す {
//   詳細
//   いいね
//   応募
// }
// 進行中 {
//   詳細
//   ボード
//   メッセージ
// }
// 募集中 {
//   詳細 > 編集
//   いいね
//   応募
// }
// 応募済み {
//   詳細
//   いいね
//   応募
// }
// いいね {
//   詳細
//   いいね
//   応募
// }

const Timeline: React.FC<Props> = ({ timeline }) => {
  return (
    <>
      <div className="bg-white mb-5 mx-auto p-4 rounded-lg w-10/12">
        <p className="font-bold text-xl">Todoアプリ開発</p>
        <p className="mb-4">React, TypeScriptの練習</p>
        <div className="flex justify-around">
          <div className="flex text-xs w-1/3">
            <button className="border-2 font-bold flex-grow  py-1 rounded-full"
            >いいね
            </button>
            <span className="ml-2 py-1"
            >20</span>
          </div>
          <div className="flex text-xs w-1/3">
            <button className="border-2 font-bold flex-grow py-1 rounded-full"
            >応募
            </button>
            <span className="ml-2 py-1"
            >3</span>
          </div>
        </div>
      </div>
    </>
  )
}

export default Timeline;