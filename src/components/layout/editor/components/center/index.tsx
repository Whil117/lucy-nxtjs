import dynamic from "next/dynamic";

const NoSSRComponent = dynamic(() => import("@Src/components/pages/stage"), {
  ssr: false,
});

export default function TestsPage(props) {
  return <NoSSRComponent />;
}
