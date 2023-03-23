import { useEffect } from "react";

export default function useGiveInputFocus(input) {
  useEffect(() => {
    input.current.focus();
  }, []);
}
