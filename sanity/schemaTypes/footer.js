const footer = {
  name: 'footer',
  title: 'Footer',
  type: 'document',
  fields: [
    {
      name: 'logo',
      title: 'Logo Image',
      type: 'image',
      options: { hotspot: true },
    },
    {
      name: 'navigationLinks',
      title: 'Navigation Links',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'socialLinks',
      title: 'Social Links',
      type: 'array',
      of: [{
        type: 'object',
        fields: [
          { name: 'icon', title: 'Icon Image', type: 'image' },
          { name: 'url', title: 'Social Link URL', type: 'url' },
        ]
      }]
    }
  ],
}

export default footer;
