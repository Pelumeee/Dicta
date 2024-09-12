import { FaBook } from "react-icons/fa";
const Nav = () => {
    return (
        <nav className="w-full py-4 flex items-center gap-2">
            <FaBook className="inline-block text-3xl text-[#999999]" />
            <h1 className="text-4xl font-bold text-[#999999]">Dicta</h1>
        </nav>
    );
};

export default Nav;
