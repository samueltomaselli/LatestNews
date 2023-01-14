import React, { createContext, useState } from "react";
import axios from "axios";

type IArticle = {
  author: string;
  title: string | "Anonymous";
  publishedAt: string;
  description: string;
  urlToImage: string;
};

type News = {
  status: string;
  articles: IArticle[];
};

export type IContext = {
  news?: News;
  setNews: React.Dispatch<React.SetStateAction<News | undefined>>;
  fetchNews: () => void;
  search: string;
  setSearch: React.Dispatch<React.SetStateAction<string>>;
};

type IProvider = {
  children: JSX.Element;
};

export const InfoContext = createContext<IContext>({} as IContext);

export const InfoProvider = ({ children }: IProvider) => {
  const [news, setNews] = useState<News>();
  const [search, setSearch] = useState<string>("");
  const fetchNews = async () => {
    try {
      const response = await axios.get("https://newsapi.org/v2/top-headlines?country=us&apiKey=f9d1dbb651434ae5b7a0adbcb0c0d864");
      setNews(response.data);
    } catch (error) {
      throw new Error("Not found");
    }
  };
  return <InfoContext.Provider value={{ fetchNews, news, setNews, search, setSearch }}>{children}</InfoContext.Provider>;
};
