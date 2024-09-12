const RelatedWords = ({ name, array }) => {
    const formattedArray = array.join(', ');
    return (
        <div className="flex items-center gap-4 mt-4">
            <span className="text-[#ababab]">{name}</span>
            <span className="text-[#a847f2] text-sm">{formattedArray}</span>
        </div>
    );
};
export default RelatedWords;
