import Layout from "@lambo/components/layouts/withHeaderFooter";
import { auth, signOut } from '@lambo/lib/auth';
import { Image } from "@nextui-org/react";

export default async function ProfilePage() {
  const session = await auth();

  return (
    <Layout>
      <div>
        <button type="submit">
          Sign out
        </button>
      </div>
      <div className="grid grid-rows-3 grid-flow-col gap-4">
        <div className="row-span-3">
          <Image
            isZoomed
            src="https://tailwindui.com/img/ecommerce-images/product-page-01-product-shot-01.jpg"
          />
        </div>
        <div className="col-span-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industry s standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
        <div className="row-span-2 col-span-2">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries, but also the leap into electronic typesetting,
          remaining essentially unchanged. It was popularised in the 1960s with
          the release of Letraset sheets containing Lorem Ipsum passages, and
          more recently with desktop publishing software like Aldus PageMaker
          including versions of Lorem Ipsum.
        </div>
      </div>
    </Layout>
  );
}
