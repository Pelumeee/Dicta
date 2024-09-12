const Definitions = ({ definitionsArray }) => {
    return (
        <ul className="px-10">
            {definitionsArray.definitions.map((definition, i) => {
                return (
                    <li key={i} className="list-disc leading-8">
                        {definition.definition}
                        {definition.example && <p className="text-[#ababab] text-sm leading-9">&#34;{definition.example}&#34;</p>}
                    </li>
                );
            })}
        </ul>
    );
};

export default Definitions;
