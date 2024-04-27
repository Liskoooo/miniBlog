import { useRef } from "react";

export default function PickedTopic({ topic, loadedReplies, postReply }) {
  const reply = useRef();
  return (
    <div className="w-full bg-slate-200 rounded-lg p-8">
      <div>
        <h2 className="text-2xl text-center mb-4">{topic.discussionTitle}</h2>
        <p className="text-sm text-gray-600 mb-2">posted by {topic.username}</p>
        <p className="border-2 w-full h-auto bg-white p-4 rounded-md">
          {topic.text}
        </p>
      </div>
      {/* <ul>
        {topic.replies &&
          topic.replies.map((reply, index) => (
            <li key={index} className="text-gray-600">
              {reply}
            </li>
          ))}
      </ul> ---> sploh ne bi rabo dodatnega propa za to, ampak okej, spodaj je druga resitev, manj optimalna ocitno, ker rabimo dodaten prop*/}
      <div className="mt-6">
        <textarea
          className="w-full h-32 border-2 rounded-md p-2"
          placeholder="Write your reply here"
          ref={reply}
        ></textarea>
        <button
          className="px-4 py-2 mt-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={() => postReply(reply.current.value)}
        >
          Reply
        </button>
      </div>
      {
        <div className="mt-5">
          <h3>Comments and replies</h3>
          <ul className="w-full bg-white mt-5">
            {loadedReplies &&
              loadedReplies.map((reply, index) => {
                return (
                  <li
                    key={index}
                    className="p-2 border-2 bg-slate-400 rounded-md h-auto mb-2 text-white"
                  >
                    {reply}
                  </li>
                );
              })}
          </ul>
        </div>
      }
    </div>
  );
}
