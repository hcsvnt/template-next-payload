import type { CollectionConfig } from 'payload';

export const Media: CollectionConfig = {
    slug: 'media',
    access: {
        // eslint-disable-next-line functional/functional-parameters
        read: () => true
    },
    fields: [
        {
            name: 'alt',
            type: 'text',
            required: true
        }
    ],
    upload: true
};
