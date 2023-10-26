import React, { useState } from "react";
import { FaArrowRight } from "react-icons/fa";
import OpenAI from "openai";
import Skeleton from "react-loading-skeleton";

const ChatAIModal = ({ isOpen, onClose }) => {
  const [command, setCommand] = useState("");
  const [loading, setLoading] = useState(false);
  const [result, setResult] = useState([]);

  const openaiKey = import.meta.env.VITE_OPENAI_KEY;

  const openai = new OpenAI({
    apiKey: openaiKey, // defaults to process.env["OPENAI_API_KEY"]
    dangerouslyAllowBrowser: true,
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const chatCompletion = await openai.completions.create({
      prompt:
        "berikan user rekomendasi makanan dan minuman khas jawa timur yang sekarang lagi tren." +
        command,
      model: "text-davinci-003",
      temperature: 0.5,
      max_tokens: 1000,
    });

    console.log(chatCompletion.choices);
    setResult(chatCompletion.choices);
    setLoading(false);
  };
  return (
    isOpen && (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-[#000000A3] bg-opacity-50 z-50 ">
        <div className="flex flex-col text-center bg-white p-4 rounded-lg">
          <h1 className="font-bold text-2xl mt-4 text-teal-500">
            Bingung Mau Order Apa?, <br />{" "}
            <span className="text-red-500">Chat Bot</span> Solusinya.
          </h1>

          <p className="text-sm">
            Chat Bot membantu anda dalam memberikan rekomendasi makanan /
            minuman (khusus daerah Jawa Timur).
          </p>

          <div className="w-full container p-3 mt-4 flex justify-between">
            <input
              type="text"
              name="command"
              value={command}
              onChange={(e) => setCommand(e.target.value)}
              id="command"
              className="border-solid border-2 outline-none bg-transparent border-slate-300 w-full rounded-md py-2 px-2 bg-slate-100 active:border-teal-500 focus:border-teal-500"
              placeholder="masukan pertanyaan....."
            />

            <button
              type="submit"
              className={`p-4 font-semibold ml-2 rounded-md  ${
                command.length === 0
                  ? "bg-transparent text-slate-500"
                  : " bg-teal-600 text-white"
              }`}
              onClick={(e) => handleSubmit(e)}
              disabled={loading || command.length === 0}
            >
              <FaArrowRight />
            </button>
          </div>

          {loading ? (
            <Skeleton count={3} height={20} />
          ) : result?.length > 0 ? (
            result?.map((item, index) => (
              <div
                className="p-3 bg-slate-100 rounded-lg text-sm h-full"
                key={index}
              >
                <p className="text-justify">{item.text}</p>
              </div>
            ))
          ) : null}

          <button
            onClick={onClose}
            className="mt-4 px-4 py-2 bg-red-500 text-white rounded-md font-semibold hover:bg-red-400 hover:duration-200 hover:transition "
          >
            Tutup Chat
          </button>
        </div>
      </div>
    )
  );
};

export default ChatAIModal;
