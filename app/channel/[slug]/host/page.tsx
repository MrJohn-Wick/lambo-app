import HostChannel from "@lambo/components/host-channel";
import Layout from "@lambo/components/layouts/withHeaderFooter";

export function generateMetadata({ params: { slug } }: PageProps) {
  return {
    title: `Hosting ${slug}`,
  };
}

interface PageProps {
  params: {
    slug: string;
  };
}

export default function ChannelHostPage({ params: { slug } }: PageProps) {
  return (
    <Layout>
      <HostChannel slug={slug} />
    </Layout>
  );
}
