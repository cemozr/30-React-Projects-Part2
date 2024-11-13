import { useState } from "react";

type LocalizedString = {
  en: {
    greeting: string;
    welcome: string;
  };
  tr: {
    greeting: string;
    welcome: string;
  };
};

type Local = "en" | "tr";

export default function ProjectTwentyThree() {
  const [local, setLocal] = useState<Local>("en");

  const localizedString: LocalizedString = {
    en: {
      greeting: "Hello World",
      welcome: "Welcome to my app",
    },
    tr: {
      greeting: "Merhaba Dünya",
      welcome: "Uygulamama hoşgeldiniz",
    },
  };

  const translate = (data: "greeting" | "welcome") => {
    return localizedString[local][data];
  };

  return (
    <div className="flex flex-col gap-2 border-primary">
      <h1>{translate("greeting")}</h1>
      <h1>{translate("welcome")}</h1>
      <div className="flex gap-2">
        <button
          onClick={() => setLocal("en")}
          className="w-20 rounded bg-primary text-background"
        >
          EN
        </button>
        <button
          onClick={() => setLocal("tr")}
          className="w-20 rounded bg-primary text-background"
        >
          TR
        </button>
      </div>
    </div>
  );
}
