import Definitions from "./Definitions";
import RelatedWords from "./RelatedWords";
const Meanings = ({ meaning }) => {
    return (
        <div className="mb-10">
            <div className="w-full flex items-center gap-8 mb-6">
                <span className="whitespace-nowrap dark:text-[#b1b1b1]  italic font-bold">{meaning.partOfSpeech}</span>
                <div className="h-[1px] w-full bg-[#e8e8e8]"></div>
            </div>
            <div className="w-full">
                <h1 className="text-[#ababab] text-xl font-medium mb-2">Meaning</h1>
                <Definitions definitionsArray={meaning} />
            </div>
            {meaning.synonyms.length > 0 && <RelatedWords name="Synonyms" array={meaning.synonyms}/>}
            {meaning.antonyms.length > 0 && <RelatedWords name="Antonyms" array={meaning.antonyms}/>}
        </div>
    );
};

export default Meanings;
