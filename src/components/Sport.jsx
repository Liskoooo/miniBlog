export default function Sport({
  title,
  dbData,
  handleSave,
  handleReading,
  handleNewPost,
  backToDefault,
}) {
  return (
    <div className="bg-slate-200 w-full rounded-xl">
      <div>
        <h2 className=" text-2xl text-center ">{title.toUpperCase()}</h2>
      </div>
      <div className="flex justify-between">
        <button
          className="border-2 px-7 py-3 rounded-md bg-slate-500 text-white text-xl"
          onClick={() => handleNewPost(title)}
        >
          Start a new post
        </button>
        <button
          className="border-2 px-7 py-3 rounded-md bg-slate-500 text-white text-xl"
          onClick={() => backToDefault()}
        >
          Back to Default Page
        </button>
      </div>
      <div>
        <ul className="mt-5 h-auto pl-24 pb-3">
          {dbData.map((data) => {
            return (
              <li
                key={data._id}
                className="border-2 rounded-lg px-4  w-5/6 h-24 overflow-y-hidden overflow-x-hidden mb-2 relative"
              >
                <h2 className="text-left">{data.discussionTitle}</h2>
                <p className="text-left">by {data.username}</p>

                <p className="opacity-30">{data.text}</p>
                <button
                  className="absolute top-0 right-0 px-2 py-1 border-2 mr-2 mt-2"
                  onClick={() => handleSave(data)}
                >
                  Save for later
                </button>
                <button
                  className="absolute right-0 bottom-0 border-2 px-1  mr-2 mb-1"
                  onClick={() => handleReading(data)}
                >
                  Read
                </button>
              </li>
            );
          })}
        </ul>
      </div>
    </div>
  );
}
