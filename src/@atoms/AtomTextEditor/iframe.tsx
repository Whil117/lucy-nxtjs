import { Node } from "@tiptap/core";

export interface IframeOptions {
  allowFullscreen: boolean;
  HTMLAttributes: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    iframe: {
      setIframe: (options: { src: string }) => ReturnType;
    };
  }
}

const pathsIframe = {
  "open.spotify.com": {
    height: "80px",
  },
  "www.youtube.com": {
    height: "620px",
  },
};

const handleIframe = (embed: string): URL => {
  const url = embed?.match(/src="([^"]*)"/)?.[1];

  return new URL(url ?? "");
};

const typesArrSpotify = ["track", "playlist", "album", "artist"];

type PropsTypesSpotify = {
  [key: string]: {
    regexp: RegExp;
    styles: {
      height: string;
    };
  };
};

const propsTypes: PropsTypesSpotify = {
  track: {
    regexp: /track/,
    styles: {
      height: "80px",
    },
  },
  playlist: {
    regexp: /playlist/,
    styles: {
      height: "370px",
    },
  },
  album: {
    regexp: /album/,
    styles: {
      height: "370px",
    },
  },
  artist: {
    regexp: /artist/,
    styles: {
      height: "370px",
    },
  },
  episode: {
    regexp: /episode/,
    styles: {
      height: "80px",
    },
  },
};

const validateTypeRegex = (dataString: string) => {
  const isConfig = typesArrSpotify.find((item) =>
    propsTypes?.[item]?.regexp.test(dataString)
  );

  return propsTypes?.[isConfig]?.styles;
};

const plataforms = (props: {
  node: Node<any, any>;
  HTMLAttributes: Record<string, any>;
}) => {
  const { HTMLAttributes } = props;

  const isHost = handleIframe(HTMLAttributes?.src ?? "");
  const config = pathsIframe?.[isHost?.hostname];
  const height = config?.height;
  return {
    "open.spotify.com"() {
      return [
        "div",
        {
          height: validateTypeRegex(isHost?.pathname)?.height,
        },
        [
          "iframe",
          {
            ...HTMLAttributes,
            src: isHost,
            height: validateTypeRegex(isHost?.pathname)?.height,
            width: "100%",
            // src: "",
          },
        ],
      ];
    },
    "www.youtube.com"() {
      return [
        "div",
        {
          height: height,
        },
        [
          "iframe",
          {
            ...HTMLAttributes,
            src: isHost,
            height: height,
            width: "100%",
            // src: "",
          },
        ],
      ];
    },
  };
};

export default Node.create<IframeOptions>({
  name: "iframe",

  group: "block",

  atom: true,

  addOptions() {
    return {
      allowFullscreen: true,
      HTMLAttributes: {
        class: "iframe-wrapper",
      },
    };
  },

  addAttributes() {
    return {
      src: {
        default: null,
      },
      frameborder: {
        default: 0,
      },
      allowfullscreen: {
        default: this.options.allowFullscreen,
        parseHTML: () => this.options.allowFullscreen,
      },
    };
  },

  parseHTML() {
    return [
      {
        tag: "iframe",
      },
      {
        tag: "br",
      },
    ];
  },

  renderHTML(props) {
    const { HTMLAttributes } = props;

    const isHost = handleIframe(HTMLAttributes?.src ?? "");
    const config = pathsIframe?.[isHost?.hostname];
    const height = config?.height;

    const data = plataforms(props as any)[isHost?.hostname]();
    console.log(data);

    return data;
  },

  addCommands() {
    return {
      setIframe:
        (options: { src: string }) =>
        ({ tr, dispatch }) => {
          const { selection } = tr;
          const node = this.type.create(options);

          if (dispatch) {
            tr.replaceRangeWith(selection.from, selection.to, node);
          }

          return true;
        },
    };
  },
});
