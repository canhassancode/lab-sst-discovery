// eslint-disable-next-line @typescript-eslint/triple-slash-reference
/// <reference path="./.sst/platform/config.d.ts" />

export default $config({
  app(input) {
    return {
      name: "lab-sst-discovery",
      removal: input?.stage === "production" ? "retain" : "remove",
      home: "aws",
    };
  },
  async run() {
    const bucket = new sst.aws.Bucket("LabSSTS3", {
      public: true,
    });
    new sst.aws.Nextjs("LabSSTWeb", { link: [bucket] });
  },
});
