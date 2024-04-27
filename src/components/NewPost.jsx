import { useRef } from "react";

export default function NewPost({ title, postANewTopic, backToTopics }) {
  const titleRef = useRef();
  const postRef = useRef();

  return (
    <div className="w-full text-center">
      <h2 className="text-2xl">New {title.toUpperCase()} post</h2>
      <label
        htmlFor="discussionTitle"
        className="block text-gray-800 font-semibold mb-2 ml-0"
      >
        Discussion Title:
      </label>
      <input
        type="text"
        id="discussionTitle"
        name="discussionTitle"
        placeholder="Enter discussion title"
        className="border border-gray-300 rounded-md px-3 py-2 focus:outline-none focus:border-blue-500 w-80"
        ref={titleRef}
      />
      <textarea
        name=""
        id=""
        cols="80"
        rows="15"
        className="mt-5 mx-auto rounded-xl p-5 border-black border-2"
        ref={postRef}
      ></textarea>
      <div className="flex justify-between">
        <button
          className="px-4 py-1 text-2xl border-2 border-black rounded-md"
          onClick={() => backToTopics(title)}
        >
          Cancel
        </button>
        <button
          className="px-4 py-1 text-sm border-2 border-red-500 rounded-md "
          onClick={() => backToTopics(title)}
        >
          If you posted go back to the topics here !
        </button>
        <button
          className="px-4 py-1 text-2xl border-2 border-black rounded-md bg-blue-500 text-white hover:bg-blue-600"
          onClick={() =>
            postANewTopic(title, titleRef.current.value, postRef.current.value)
          }
        >
          Post
        </button>
      </div>
    </div>
  );
}
