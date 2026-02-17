import { useEffect } from "react";
import { CODES } from "../codes";
import Codes from "../components/Codes/Codes";

export default function SourcePage() {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <br />
      {CODES.map((CODES, index) => (
        <Codes
          title={CODES.title}
          sentence={CODES.sentence}
        />
      ))}
    </>
  );
};
