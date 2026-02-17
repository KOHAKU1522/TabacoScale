import { useEffect } from "react";
import Introduction from "../components/Introduction/Introduction"

export default function HomePage() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <br />
      <br />
      <Introduction />
    </>
  )
}