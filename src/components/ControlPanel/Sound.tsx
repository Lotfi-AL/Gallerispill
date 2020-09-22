import React from "react";

type SoundProps = {
  src: string;
  ter: boolean;
};

const Sound = ({ src, ter }: SoundProps) => {
  if (ter) {
    return <audio src={src} autoPlay></audio>;
  } else {
    return null;
  }
};

export default Sound;
