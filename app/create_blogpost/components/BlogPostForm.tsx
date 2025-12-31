"use client";

import { useState } from "react";
import { storePost } from "../functions/blogpost";
import { StoreBlogpost } from "@/app/types/blogpost";

export default function BlogpostForm() {
  const [header, setHeader] = useState<string>("");
  const [description, setDescription] = useState<string>("");
  const [content, setContent] = useState<string>("");
  const [keywords, setKeywords] = useState<string[]>([]);
  const [currentKeyword, setCurrentKeyword] = useState<string>("");

  const [error, setError] = useState<unknown>();
  const [success, setSuccess] = useState<boolean>(false);

  function handleHeader(event: React.ChangeEvent<HTMLInputElement>) {
    setDescription(event?.currentTarget.value);
  }

  function handleDescription(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setHeader(event?.currentTarget.value);
  }

  function handleContent(event: React.ChangeEvent<HTMLTextAreaElement>) {
    setContent(event?.currentTarget.value);
  }

  function handleKeywords(newKeyword: string) {
    setKeywords([...keywords, newKeyword]);
    setCurrentKeyword("");
  }

  function handleCurrentKeyword(event: React.ChangeEvent<HTMLInputElement>) {
    setCurrentKeyword(event?.currentTarget.value);
  }

  function deleteKeyword(keywordToDelete: string) {
    keywords.filter(
      (keyword) => keyword !== keywordToDelete
    ); /* this function is not finished!!! */
  }

  async function submitPost() {
    if (!header || !description || !content || !keywords) {
      return alert("Missing inputs!");
    }
    const blogpost: StoreBlogpost = {
      header,
      description,
      content,
      keywords,
    };

    try {
      const { body, status } = await storePost(blogpost);

      if (status !== 200) {
        alert("An error occurred!");
      }

      setSuccess(true);
    } catch (error) {
      setError(error);
    } finally {
      setSuccess(true);
    }
  }

  const SuccessCard = () => {
    return (
      <div className="flex flex-col items-center content-center p-8 rounded-box">
        <h3 className="text-2xl font-semibold">
          The blogpost was stored successfully!
        </h3>
      </div>
    );
  };

  return (
    <form className="flex flex-col space-y-8 items-end">
      <input
        type="text"
        className="input bg-white w-full border border-gray-200"
        placeholder="Header"
        onSubmit={submitPost}
        onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
          handleHeader(event)
        }
        value={header}
      />
      <div className="flex flex-row space-x-2 w-full">
        <input
          type="text"
          className="input bg-white  border border-gray-200"
          placeholder="Keywords"
          onChange={(event: React.ChangeEvent<HTMLInputElement>) =>
            handleCurrentKeyword(event)
          }
          value={currentKeyword}
        />
        <button
          type="button"
          onClick={() => {
            if (currentKeyword === "") {
              return alert(
                "No keyword was chosen"
              ); /* design should be changed */
            }
            handleKeywords(currentKeyword);
          }}
          className="btn"
        >
          Add
        </button>
        {keywords.map((keyword, index) => {
          return (
            <button
              onClick={() => deleteKeyword(keyword)}
              value={keyword}
              key={index}
              className="btn border-gray-200 bg-white text-black shadow-none"
            >
              {keyword}
            </button>
          );
        })}
      </div>
      <textarea
        className="textarea w-full bg-white border border-gray-200"
        placeholder="Description"
        onChange={(event) => handleDescription(event)}
        value={description}
      />
      <textarea
        className="textarea bg-white w-full min-h-screen border border-gray-200"
        placeholder="Start typing..."
        onChange={(event) => handleContent(event)}
        value={content}
      />
      <button type="submit" className="btn w-96">
        Create blogpost
      </button>
    </form>
  );
}
