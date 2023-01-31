import { Node } from "@tiptap/core";

export interface VideoOptions {
  allowFullscreen: boolean;
  controls: boolean;
  HTMLAttributes: {
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    [key: string]: any;
  };
}

declare module "@tiptap/core" {
  interface Commands<ReturnType> {
    video: {
      setVideo: (options: { src: string }) => ReturnType;
    };
  }
}

export default Node.create<VideoOptions>({
  name: "video",

  group: "block",

  atom: true,

  addOptions() {
    return {
      controls: true,
      allowFullscreen: true,
      HTMLAttributes: {
        class: "video-wrapper",
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
      controls: {
        default: true,
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
        tag: "video",
      },
      {
        tag: "br",
      },
    ];
  },

  renderHTML({ HTMLAttributes }) {
    return ["div", this.options.HTMLAttributes, ["video", HTMLAttributes]];
  },

  addCommands() {
    return {
      setVideo:
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
