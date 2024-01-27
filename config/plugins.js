module.exports = ({ env }) => ({
  "vercel-deploy": {
    enabled: true,

    config: {
      deployHook:
        "https://api.vercel.com/v1/integrations/deploy/prj_<deploy-hook>",
      apiToken: "o474EEhuN8eJfuKMfTKfMpD9",
      appFilter: "trademindshub-blog",
      teamFilter: "",
      roles: ["strapi-super-admin", "strapi-editor", "strapi-author"],
    },
  },
});
