const ErrorMessage = ({ fetchedData }) => {
    return (
        <div className="sm:py-32 py-16 text-center">
            <h1 className="text-[#2b2b2b] sm:text-5xl text-2xl leading-8 font-black mb-2">{fetchedData.title}</h1>
            <p className="text-[#ababab] leading-9">{fetchedData.message}</p>
        </div>
    );
};

export default ErrorMessage;
