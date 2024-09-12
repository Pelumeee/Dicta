import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import WordBox from "./WordBox";
import Spinner from "./Spinner";
import Welcome from "./Welcome";

import Nav from "./Nav";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [fetchedData, setFetchedData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [welcome, setWelcome] = useState(true);

    const searchWord = async (word, stateToUpdate) => {
        if (!word) return;
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            console.log(response.message);
        }
        const data = await response.json();
        setWelcome(false);
        stateToUpdate(data);
        setLoading(false);
    };

    useEffect(() => {
        searchWord(searchTerm, setFetchedData);
    }, []);

    const handleChange = (e) => {
        setSearchTerm(e.target.value);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        if (searchTerm === "") return;
        setWelcome(false);
        setLoading(true);
        searchWord(searchTerm, setFetchedData); // Fetch new data on submit
    };
    return (
        <div className="flex justify-center">
            <div className="lg:w-[50%] w-[90%] flex flex-col items-center gap-4">
                <Nav />
                <form onSubmit={handleSubmit} className="w-full flex items-center justify-between bg-[#f4f4f4] py-6 px-4 rounded-[8px]">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={handleChange}
                        placeholder="search word"
                        className="w-[60%] bg-inherit text-base font-medium focus:outline-none text-[#999999] leading-8"
                    />
                    <FaSearch className="text-[#9c6bca]" />
                </form>
                {welcome && <Welcome />}
                {loading ? <Spinner loading={loading} /> : fetchedData.length > 0 && <WordBox fetchedData={fetchedData} />}
            </div>
        </div>
    );
}

export default App;
