import { useState, useEffect } from "react";
import { FaSearch } from "react-icons/fa";
import WordBox from "./WordBox";
import Spinner from "./Spinner";
import Welcome from "./Welcome";
import ErrorMessage from "./ErrorMessage";

import Nav from "./Nav";

function App() {
    const [searchTerm, setSearchTerm] = useState("");
    const [fetchedData, setFetchedData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [welcome, setWelcome] = useState(true);
    const [error, setError] = useState(false);
    const [darkMode, setDarkMode] = useState(false);

    const searchWord = async (word, stateToUpdate) => {
        if (!word) return;
        const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
        if (!response.ok) {
            console.log(response.message);
        }
        const data = await response.json();
        if (Array.isArray(data)) {
            setWelcome(false);
            stateToUpdate(data);
            setLoading(false);
        } else {
            setWelcome(false);
            stateToUpdate(data);
            setLoading(false);
            setError(true);
        }
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
        setError(false);
        setLoading(true);
        searchWord(searchTerm, setFetchedData); // Fetch new data on submit
    };

    const themeToggler = () => {
        setDarkMode(!darkMode);
        // document.body.classList.toggle("dark-mode");
        // localStorage.setItem("darkMode", darkMode);
    };

    return (
        <div className={`flex ${darkMode && "dark bg-[#050505]"} justify-center min-h-[100vh]`}>
            <div className="lg:w-[50%] w-[90%] flex flex-col items-center gap-4">
                <Nav toggleTheme={themeToggler} dark={darkMode} />
                <form onSubmit={handleSubmit} className="w-full flex items-center justify-between bg-[#f4f4f4] dark:bg-[#1f1f1f] py-6 px-4 rounded-[8px]">
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
                {error && <ErrorMessage fetchedData={fetchedData} />}
                {loading ? <Spinner loading={loading} /> : fetchedData.length > 0 && <WordBox fetchedData={fetchedData} />}
            </div>
        </div>
    );
}

export default App;
