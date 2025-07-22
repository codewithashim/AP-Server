export default ({ env }) => ({
  // Cloudinary Media Library Plugin
  'cloudinary-media-library': {
    enabled: true,
    config: {
      cloud_name: env('CLOUDINARY_CLOUD_NAME'),
      api_key: env('CLOUDINARY_API_KEY'),
      api_secret: env('CLOUDINARY_API_SECRET'),
    },
  },
});
