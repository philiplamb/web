export default function Project({ title, link, description, languages }) {
  
    return (
        <div className="flex flex-col sm:justify-center items-center pt-6 sm:pt-0 bg-gray-100 p-4">
            <h2 className="text-xl font-semibold text-gray-900 hover:underline truncate mt-5">{title}</h2>
        
            <div className="w-full sm:max-w-md mt-6 px-6 py-4 bg-white shadow-md overflow-hidden sm:rounded-lg">
                <h3>Link:</h3>
                <a href="">{link}</a>
                <p className="mt-4">
                    {description}
                </p>
                <p className="text-sm mt-10">
                    Languages:
                </p>
                <ul>
                    {languages.map((item, key) => {
                        return (
                            <li key={key}>
                                {item}
                            </li>
                        )
                    })}
                </ul>
            </div>
        </div>
    )
}