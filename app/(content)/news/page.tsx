"use client";

import NewsList from "@/components/news-list";
import { useEffect, useState } from "react";

type NewsType = {
  id: string;
  slug: string;
  title: string;
  image: string;
  date: string;
  content: string;
}[];

export default function NewsPage() {
  const [news, setNews] = useState<NewsType>([]);
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function fetchNews() {
      setIsLoading(true);
      const response = await fetch("http://localhost:8080/news");

      if (!response.ok) {
        setError("fetching news error");
        setIsLoading(false);
      }
      const res = await response.json();

      setIsLoading(false);
      setNews(res);
    }
  }, []);
  if (isLoading) return <p>Loading...</p>;
  if (error) return <p>{error}</p>;

  return (
    <>
      <h1>News Page</h1>
      <NewsList news={news} />
    </>
  );
}
