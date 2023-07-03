const SectionTitle = ({ children }) => {
    return (
            <h3 className="uppercase font-semibold md:text-xl flex items-center text-[#d4d6da]">
                <span className="bg-gray-700 py-1 px-2 rounded">{children}</span>
                <span className="pb-3">_________</span>
            </h3>
    );
};

export default SectionTitle;