import NewsList from "@/components/news-list";
import { getNewsForYear } from "@/lib/news";

type FiletredNewsPageProps = {
  params: {
    year: string;
  };
};

export default function FiletredNewsPage({ params }: FiletredNewsPageProps) {
  const newsYear = params.year;
  const news = getNewsForYear(newsYear);
  return <NewsList news={news} />;
}
