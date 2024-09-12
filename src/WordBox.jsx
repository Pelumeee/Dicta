import { useState, useEffect, useRef } from "react";
import { FaPlay } from "react-icons/fa";
import Meanings from "./Meanings";
const WordBox = ({ fetchedData }) => {
    const [audioSrc, setAudioSrc] = useState("");
    const audioRef = useRef(null);

    useEffect(() => {
        const phonetic = fetchedData[0]?.phonetics.find((p) => p.audio);
        if (phonetic) {
            setAudioSrc(phonetic.audio);
        }
    }, [fetchedData]);

    const handlePlay = () => {
        if (audioRef.current) {
            audioRef.current.play();
        }
    };
    return (
        <div className="w-full">
            <div className="w-full mt-10 flex items-start justify-between mb-8">
                <div>
                    <h1 className="text-[#2b2b2b] sm:text-5xl text-2xl leading-8 font-black mb-10">{fetchedData[0].word}</h1>
                    <span className="text-[#a847f2] font-medium">{fetchedData[0].phonetic}</span>
                </div>
                <div onClick={handlePlay} className="sm:p-6 p-3 rounded-[50%] flex items-center justify-center bg-[#e9d0fa] cursor-pointer">
                    <audio ref={audioRef} src={audioSrc} />
                    <FaPlay className="sm:text-3xl text-xl text-[#a847f2]" />
                </div>
            </div>
            {fetchedData[0].meanings.map((meaning, i) => {
                return <Meanings key={i} meaning={meaning} />;
            })}

            <div className="py-4 border-t border-[#e8e8e8] flex items-center gap-4 mt-10">
                <h1 className="text-[#ababab] text-sm">Source</h1>
                <a href={fetchedData[0].sourceUrls} className="text-xs text-[#ababab] underline">
                    {fetchedData[0].sourceUrls}
                </a>
            </div>
        </div>
    );
};

export default WordBox;
