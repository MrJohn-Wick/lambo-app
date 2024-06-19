import WatchChannel from "@lambo/components/watch-channel";

export function generateMetadata({ params: { slug } }: PageProps) {
  return {
    title: `Watching ${slug}`,
  };
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ChannelPage({ params: { slug } }: PageProps) {
  return <WatchChannel slug={slug} />;
}
