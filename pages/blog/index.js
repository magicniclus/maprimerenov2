import React, { useEffect, useState } from "react";
import Basic from "../../layout/Basic";
import CTA from "../../components/CTA/CTA";
import { posts } from "../../data/posts";

const index = () => {
  const [articles, setArticles] = useState("");
  useEffect(() => {
    setArticles(posts);
  }, [posts]);

  return (
    <Basic>
      <section className="min-h-[calc(100vh-104px)] max-w-[1250px] mx-auto px-5 lg:pb-10 lg:px-20 flex flex-col">
        <div className="flex flex-col items-center">
          <h1 className="mt-10 text-4xl font-bold tracking-tight text-dark text-center">
            Tous nos articles
          </h1>
          <h2 className="text-dark/80 text-center mt-7 lg:w-1/2">
            Comment bénéficier de MaPrimeRenov' ? Quels sont les travaux
            éligibles ? Quelles sont les conditions d'obtention ? Retrouvez
            toutes les informations sur Maprimerenov’.
          </h2>
        </div>
        <div className="mx-auto mt-16 grid max-w-2xl grid-cols-1 gap-x-8 gap-y-20 lg:mx-0 lg:max-w-none lg:grid-cols-3">
          {articles &&
            articles.map((post) => (
              <article
                key={post.id}
                className="flex flex-col items-start justify-between"
              >
                <div className="relative w-full">
                  <img
                    src={post.imageUrl}
                    alt=""
                    className="aspect-[16/9] w-full rounded-2xl bg-gray-100 object-cover sm:aspect-[2/1] lg:aspect-[3/2]"
                  />
                  <div className="absolute inset-0 rounded-2xl ring-1 ring-inset ring-gray-900/10" />
                </div>
                <div className="max-w-xl">
                  <div className="mt-8 flex items-center gap-x-4 text-xs">
                    <time dateTime={post.datetime} className="text-dark/75">
                      {post.date}
                    </time>
                    <a
                      href={`blog/${post.type}/${post.slug}`}
                      className="relative z-10 rounded-full bg-gray-50 px-3 py-1.5 font-medium text-dark hover:bg-gray-100"
                    >
                      {post.title}
                    </a>
                  </div>
                  <div className="group relative">
                    <h3 className="mt-3 text-lg font-semibold leading-6 text-dark group-hover:text-gray-600">
                      <a href={post.href}>
                        <span className="absolute inset-0" />
                        {post.title}
                      </a>
                    </h3>
                    <p className="mt-5 line-clamp-3 text-sm leading-6 text-dark">
                      {post.description}
                    </p>
                    <div className="text-sm leading-6">
                      <p className="font-semibold text-dark">
                        <p>
                          <span className="absolute inset-0" />
                          {post.author}
                        </p>
                      </p>
                      <p className="text-gray-600">{post.author.role}</p>
                    </div>
                  </div>
                </div>
              </article>
            ))}
        </div>
      </section>
      <CTA />
    </Basic>
  );
};

export default index;
