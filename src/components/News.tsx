import { useContext, useEffect, useState } from "react";
import axios from "axios";
import { InfoContext } from "../context/Context";
import img from "../assets/img.webp";

export const Posts = () => {
  const { news, fetchNews, search } = useContext(InfoContext);

  useEffect(() => {
    fetchNews();
  }, []);

  const dateParse = (date: string) => {
    const datez = new Date(date);
    const dateForm = new Date(datez.getTime());
    const dateXdd = dateForm.toLocaleDateString("pt-BR");
    const dateXd = dateXdd.toString();
    return dateXd;
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
          <div key={key} className="flex flex-col bg-gray-100 p-6 rounded-md">
            <div className="mb-4">{dateParse(val.publishedAt)}</div>
            <div className="font-bold mb-2 text-lg max-sm:text-sm">{val.title}</div>
            <div className="font-mono mb-4 max-sm:text-xs">{val.description ? val.description : "No description."}</div>
            <img src={val.urlToImage ? val.urlToImage : img} alt="img" className="w-6/6 mb-3 m-auto rounded-md" />
            <div className="text-xs font-bold flex justify-end ">{val.author ? val.author : "Anonymous"}</div>
          </div>
        ))}
    </div>
  );
};
