export default ({ env }) => ({
  // Cloudinary upload configuration
  upload: {
    config: {
      provider: 'cloudinary',
      providerOptions: {
        cloud_name: env('CLOUDINARY_CLOUD_NAME'),
        api_key: env('CLOUDINARY_API_KEY'),
        api_secret: env('CLOUDINARY_API_SECRET'),
      },
      actionOptions: {
        upload: {
          // Optional upload parameters
          // folder: 'strapi-uploads', // Organize uploads in a folder
          // resource_type: 'auto', // Auto-detect file type
          // quality: 'auto:best', // Optimize quality
          // fetch_format: 'auto', // Auto-select best format
        },
        uploadStream: {
          // Optional upload stream parameters
          // folder: 'strapi-uploads',
          // resource_type: 'auto',
        },
        delete: {
          // Optional delete parameters
          // invalidate: true, // Invalidate cached versions
        },
      },
    },
  },
});
