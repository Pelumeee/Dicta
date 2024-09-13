import { FaBook, FaRegMoon } from "react-icons/fa";
const Nav = ({ toggleTheme, dark }) => {
    return (
        <nav className="w-full sm:py-4 py-6 flex items-center justify-between">
            <div className="flex items-center gap-2">
                <FaBook className="inline-block text-3xl text-[#999999]" />
                <h1 className="text-4xl font-bold text-[#999999]">Dicta</h1>
            </div>
            <div className="w-[8%] flex items-center justify-between">
                <div onClick={toggleTheme} className={`toggler ${dark && "dark"} relative w-[65%] py-3 rounded-[12px] bg-[#757575]  cursor-pointer`}>
                    <div className="toggle absolute w-[15px] h-[15px] rounded-[50%] bg-[#fefefe]"></div>
                </div>
                <FaRegMoon className={`${dark ? 'text-[#a847f2]' : 'text-[#757575]'}`} />
            </div>
        </nav>
    );
};

export default Nav;
