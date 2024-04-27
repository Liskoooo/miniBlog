import Body from "./components/Body";
import DebateTemplate from "./components/DebateTemplate";
import Header from "./components/Header";
import NavBar from "./components/NavBar";
import { useState, useEffect } from "react";
import Sport from "./components/Sport";
import axios from "axios";
import PickedTopic from "./components/PickedTopic";
import NewPost from "./components/NewPost";

function App() {
  const [main, setMain] = useState({
    display: "default",
    themes: undefined,
    savedTopic: [],
    readTopic: undefined,
  });

  function backToTopics(topic) {
    setMain((prevState) => {
      return {
        ...prevState,
        display: topic,
      };
    });
  }

  function backToDefault() {
    setMain((prevState) => {
      return {
        ...prevState,
        display: "default",
      };
    });
  }

  async function saveAPost(sport, title, post) {
    const res = await axios({
      method: "POST",
      url: `http://localhost:4000/postSome/${sport.toLowerCase()}`,
      data: {
        username: "A logged in user",
        discussionTitle: title,
        text: post,
      },
    });
    console.log(res);
  }

  function handleNewPost(title) {
    setMain((prevState) => {
      return {
        ...prevState,
        display: "createNewPost",
        category: title,
      };
    });
  }

  function handleDelete(topic) {
    const updatedTopics = main.savedTopic.filter((savedTopic) => {
      return savedTopic._id !== topic._id;
    });
    setMain((prevState) => {
      return {
        ...prevState,
        savedTopic: updatedTopics,
      };
    });
  }

  async function handlePostReplay(reply) {
    console.log("reply", reply);
    const res = await axios({
      method: "POST", // lahko si def. nov route za dodajanje kom btk
      url: "http://localhost:4000/postReply",
      data: {
        reply: reply,
        topicId: main.readTopic._id,
      },
      headers: {
        "Content-Type": "application/json",
      },
    });
    console.log(res.data.replies);
    setMain((prevValue) => {
      return {
        ...prevValue,
        replies: res.data.replies,
      };
    });
  }

  async function handleRead(topic) {
    console.log(topic);
    setMain((prevValue) => {
      console.log(topic);
      return {
        ...prevValue,
        display: "selectedTopicToRead",
        readTopic: topic,
        replies: topic.replies,
      };
    });
  }

  async function handleLoadDebate(sport) {
    const response = await axios.get(
      `http://localhost:4000/loadForum/${sport}`
    );
    console.log("clicked on sport ");
    setMain((prevValue) => ({
      ...prevValue,
      display: sport,
      themes: response.data, // "[x].replies" --> pa smo pri njih
    }));
    // console.log(response);
    // const themesFromDB = response.data;
    // console.log(themesFromDB, "themes");
  }

  function handleSavedTopic(newSavedTopic) {
    setMain((prevValue) => {
      return {
        ...prevValue,
        savedTopic: [...prevValue.savedTopic, newSavedTopic],
      };
    });
  }

  let displayedSport;
  console.log(main.display);
  console.log(main.themes);

  if (main.display === "swimming") {
    displayedSport = (
      <Sport
        title={main.display}
        dbData={main.themes}
        handleSave={handleSavedTopic}
        handleReading={handleRead} // kasneje optimziraj to, vidis kako sranje si si na koncu naredo, ko mors spreminjat na multuple komp.
        handleNewPost={handleNewPost}
        backToDefault={backToDefault}
      />
    );
  } else if (main.display === "running") {
    displayedSport = (
      <Sport
        title={main.display}
        dbData={main.themes}
        handleSave={handleSavedTopic}
        handleReading={handleRead} ///  kasneje optimziraj to, vidis kako sranje si si na koncu naredo, ko mors spreminjat na multuple komp.
        handleNewPost={handleNewPost}
        backToDefault={backToDefault}
      />
    );
  } else if (main.display === "cycling") {
    displayedSport = (
      <Sport
        title={main.display}
        dbData={main.themes}
        handleSave={handleSavedTopic}
        handleReading={handleRead} /// kasneje optimziraj to, vidis kako sranje si si na koncu naredo, ko mors spreminjat na multuple komp.
        handleNewPost={handleNewPost}
        backToDefault={backToDefault}
      />
    );
  } else if (main.display === "selectedTopicToRead") {
    console.log("state is changed");
    displayedSport = (
      <PickedTopic
        topic={main.readTopic}
        loadedReplies={main.replies}
        postReply={handlePostReplay}
      />
    );
  } else if (main.display === "createNewPost") {
    displayedSport = (
      <NewPost
        title={main.category}
        postANewTopic={saveAPost}
        backToTopics={backToTopics}
      />
    );
  }

  return (
    <>
      <Header />
      <NavBar loadDebate={handleLoadDebate} />
      <Body
        displayDefault={main.display}
        otherDisplay={displayedSport}
        savedTopics={main.savedTopic}
        displaySavedTopic={handleRead}
        deleteTopic={handleDelete}
      />
    </>
  );
}

export default App;
