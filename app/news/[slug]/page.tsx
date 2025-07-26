import { DUMMY_NEWS } from "@/dummy-news";

type NewsItemPage = {
  params: {
    slug: string;
  };
};
export default function NewsDetailPage({ params }: NewsItemPage) {
  const newsSlug = params.slug;
  const newsItem = DUMMY_NEWS.find((i) => i.slug === newsSlug);
  return (
    <article className="news-article">
      <header>
        <img src={`/images/news/${newsItem?.image}`} alt={newsItem?.title} />
        <h1>{newsItem?.title}</h1>
        <time dateTime={newsItem?.date}> {newsItem?.date}</time>
      </header>
      <p>{newsItem?.content}</p>
    </article>
  );
}
