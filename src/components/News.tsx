import { useContext, useEffect } from "react";
import { InfoContext } from "../context/Context";
import img from "../assets/img.webp";

export const Posts = () => {
  const { news, fetchNews, search } = useContext(InfoContext);

  useEffect(() => {
    fetchNews();
  }, []);

  const dateParse = (date: string) => {
    return new Date(date).toLocaleDateString("pt-BR");
  };

  return (
    <div className="w-3/6 max-sm:w-5/6 flex flex-col gap-10">
      {news?.articles
        .filter((val) => {
          if (search == "") {
            return val;
          } else if (val.description?.toUpperCase().includes(search.toUpperCase())) {
            return val;
          } else if (val.title?.toUpperCase().includes(search.toUpperCase())) {
            return val;
          } else if (val.author?.toUpperCase().includes(search.toUpperCase())) {
            return val;
          }
        })
        .map((val, key) => (
          <a href={val.url} key={key}>
            <div className="flex flex-col bg-gray-100 p-6 rounded-md shadow-md hover:bg-gray-200">
              <div className="font-bold mt-2 mb-4 text-lg max-sm:text-sm">{val.title}</div>
              <hr className="shadow-md  border-neutral-300" />
              <div className="font-mono mt-4 mb-4 max-sm:text-xs">{val.description ? val.description : "No description."}</div>
              <img src={val.urlToImage ? val.urlToImage : img} alt="img" className="w-6/6 mb-3 m-auto rounded-md" />
              <div className="text-xs font-bold flex justify-between ">
                <span>{val.author ? val.author : "Anonymous"}</span>
                <span>{dateParse(val.publishedAt)}</span>
              </div>
            </div>
          </a>
        ))}
    </div>
  );
};
