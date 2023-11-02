import { useRouter } from "next/router";
import { posts } from "../../../data/posts";
import Loader from "../../../components/loader/Loader";
import Basic from "../../../layout/Basic";
import CTA from "../../../components/CTA/CTA";
import { ClockIcon, UserCircleIcon } from "@heroicons/react/24/solid";

export default function BlogPost({ post }) {
  const router = useRouter();

  if (router.isFallback) {
    return (
      <div className="h-screen w-screen bg-white relative">
        <Loader />
      </div>
    );
  }

  return (
    <Basic
      title={post.title}
      description={post.description}
      ogImage={post.imageUrl}
      ogUrl={`maprimerenov-info.org${router.asPath}`}
    >
      <div className="lg:w-4/12 w-full h-max py-7 px-5 bg-gray-50 lg:hidden block mb-5">
        <h2 className="text-2xl text-dark font-semibold">Sommaire :</h2>
        <ul>
          {post.content.map((item, index) => {
            if (item.type === "subtitle") {
              return (
                <li
                  key={index}
                  className="text-dark font-semibold mt-3 list-decimal ml-5"
                >
                  {item.value}
                </li>
              );
            }
          })}
        </ul>
        <h2 className="text-2xl text-dark font-semibold mt-5">Description :</h2>
        <p className="mt-3">{post.description}</p>
        <div className="flex mt-5">
          <ClockIcon className="w-6 h-6 inline-block mr-2" />
          <p className="">
            Temps de lecture estimé:{" "}
            <span className="font-semibold">{post.readingTime}</span>
          </p>
        </div>
        <div className="flex mt-5">
          <UserCircleIcon className="w-6 h-6 inline-block mr-2" />
          <p className="">
            Auteur: <span className="font-semibold">{post.author}</span>
          </p>
        </div>
      </div>
      <section className="w-full max-w-[1250px] px-4 py-0 lg:px-20 lg:py-10 mx-auto flex justify-between items-stretch lg:flex-row flex-col lg:mb-0 mb-10">
        <div className="flex flex-col lg:w-7/12 w-full">
          <img
            src={post.imageUrl}
            alt={post.title}
            className="w-full h-52 object-cover"
          />
          {post.content.map((item, index) => {
            if (item.type === "title") {
              return (
                <h1
                  key={index}
                  className="text-5xl text-dark font-semibold mt-10"
                >
                  {item.value}
                </h1>
              );
            }
            if (item.type === "subtitle") {
              return (
                <h2
                  key={index}
                  className="text-3xl text-dark font-semibold mt-10"
                >
                  {item.value}
                </h2>
              );
            }
            if (item.type === "paragraph") {
              return (
                <p key={index} className="mt-5">
                  {item.value}
                </p>
              );
            }
            if (item.type === "list") {
              return (
                <ul key={index} className="mt-5">
                  {item.value.map((listItem, index) => (
                    <li key={index} className="mt-3">
                      {listItem}
                    </li>
                  ))}
                </ul>
              );
            }
          })}
        </div>
        <div className="lg:w-4/12 w-full h-max py-7 px-5 bg-gray-50 rounded-xl lg:block hidden">
          <h2 className="text-2xl text-dark font-semibold">Sommaire :</h2>
          <ul>
            {post.content.map((item, index) => {
              if (item.type === "subtitle") {
                return (
                  <li
                    key={index}
                    className="ml-5 text-dark font-semibold mt-3 list-decimal"
                  >
                    {item.value}
                  </li>
                );
              }
            })}
          </ul>
          <h2 className="text-2xl text-dark font-semibold mt-5">
            Description :
          </h2>
          <p className="mt-3">{post.description}</p>
          <div className="flex mt-10">
            <ClockIcon className="w-6 h-6 inline-block mr-2" />
            <p className="">
              Temps de lecture estimé:{" "}
              <span className="font-semibold">{post.readingTime}</span>
            </p>
          </div>
          <div className="flex mt-5">
            <UserCircleIcon className="w-6 h-6 inline-block mr-2" />
            <p className="">
              Auteur: <span className="font-semibold">{post.author}</span>
            </p>
          </div>
          <p className="mt-10 px-3 py-2 rounded-full bg-blue-500 text-white w-max">
            #{post.type}
          </p>
        </div>
      </section>
      <CTA />
    </Basic>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: "blocking" };
}

export async function getStaticProps({ params }) {
  const post = posts.find((post) => post.slug === params.slug);
  console.log("Fetched post: ", post);

  // Si le post n'est pas trouvé, redirigez vers une page 404
  if (!post) {
    return {
      notFound: true,
    };
  }

  return {
    props: {
      post,
    },
    revalidate: 1,
  };
}
