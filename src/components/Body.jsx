export default function Body({
  displayDefault,
  otherDisplay,
  savedTopics,
  displaySavedTopic,
  deleteTopic,
}) {
  return (
    <div className="flex p-8 gap-5">
      <div className="rounded-xl bg-gray-200 p-4 w-1/4">
        <h3 className="text-center text-gray-800 text-lg font-semibold mb-4">
          Selected Forums
        </h3>
        {savedTopics && (
          <ul>
            {savedTopics.map((topic) => (
              <li key={topic._id} className="mb-2">
                <div className="flex items-center gap-2">
                  <button
                    className="px-4 py-2 bg-blue-400 text-white rounded-md hover:bg-blue-600"
                    onClick={() => displaySavedTopic(topic)}
                  >
                    {topic.discussionTitle}
                  </button>
                  <button
                    className="px-4 py-2 bg-red-400 text-white rounded-md hover:bg-red-600"
                    onClick={() => deleteTopic(topic)}
                  >
                    Delete
                  </button>
                </div>
              </li>
            ))}
          </ul>
        )}
      </div>
      {displayDefault === "default" && (
        <div className="rounded-lg bg-white p-8 w-3/4">
          <h2 className="text-center text-2xl font-semibold mb-4">
            Default Page
          </h2>
          <p className="text-gray-600">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla
            gravida lacus eros, at aliquet turpis efficitur nec. Sed faucibus
            fermentum est, vitae bibendum ex elementum et. Vivamus et elit quis
            nisl fermentum rhoncus eget eget purus. Nullam nec nibh id ipsum
            cursus lacinia.
          </p>
        </div>
      )}
      {otherDisplay}
    </div>
  );
}
