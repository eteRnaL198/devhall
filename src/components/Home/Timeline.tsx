const Timeline: React.FC = () => {
  return (
    <>
      <div className="bg-white mb-5 mx-auto p-4 rounded-lg w-8/12">
        <p className="font-bold text-xl">Twitter Clone 作成</p>
        <p className="text-md">HTML, CSS, JavaScriptの練習</p>
        <div className="flex text-xs justify-around w-2/3">
          <button>いいね</button>
          <button>メッセージ</button>
          <button>参加</button>
        </div>
      </div>
      <div className="bg-white mb-5 mx-auto p-4 rounded-lg w-8/12">
        <p className="font-bold text-xl">Todoアプリ開発</p>
        <p className="text-md">React, TypeScriptの練習</p>
        <div className="flex text-xs justify-around w-2/3">
          <button>いいね</button>
          <button>メッセージ</button>
          <button>参加</button>
        </div>
      </div>
  </>
)
}

export default Timeline;