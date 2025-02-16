"use client";
import React, { useEffect, useState } from "react";
import { NewsList } from "../types/news";
import Title from "../components/parts/global/Title";
import Link from "next/link";

function News() {
  const [newsList, setNewsList] = useState([]);

  useEffect(() => {
    const fetchNewsList = async () => {
      const response = await fetch("http://localhost:5000/news");
      const data = await response.json();

      setNewsList(data);
    };

    fetchNewsList();
  }, []);

  return (
    <>
      <div className="p-4 container mx-auto">
        <Title text="News" />
        <div className="container mx-auto">
          <ul className="mt-4">
            {newsList.map((news: NewsList) => (
              <Link href={`/news/${news.id}`} key={news.id}>
                <li
                  key={news.id}
                  className="py-2 border-b-2 border-gray-100 flex justify-start items-center"
                >
                  <span className="mr-3">{news.date}</span>
                  <span className="mr-3 flex-none">{news.category}</span>
                  <p className="flex-1">{news.title}</p>
                </li>
              </Link>
            ))}
          </ul>
        </div>
      </div>
    </>
  );
}

export default News;
