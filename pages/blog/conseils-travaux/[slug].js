import { useRouter } from "next/router";
import { posts } from "../../../data/posts";
import Loader from "../../../components/loader/Loader";

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
    <>
      <h1>{post.title}</h1>
    </>
  );
}

export async function getStaticPaths() {
  const paths = posts.map((post) => ({
    params: { slug: post.slug },
  }));

  return { paths, fallback: true };
}

export async function getStaticProps({ params }) {
  const post = posts.find((post) => post.slug === params.slug);

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
