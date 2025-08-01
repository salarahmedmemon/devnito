const sectionTwo = {
  name: 'sectionTwo',
  title: 'Section Two - Services We Offering',
  type: 'document',
  fields: [
    {
      name: 'mainHeading',
      title: 'Main Heading',
      type: 'string',
    },
    {
      name: 'subHeading',
      title: 'Sub Heading',
      type: 'string',
    },
    {
      name: 'description',
      title: 'Description',
      type: 'text',
    },
    {
      name: 'buttonLinks',
      title: 'Button/Service Links',
      type: 'array',
      of: [{ type: 'string' }],
    },
    {
      name: 'circleImage',
      title: 'Circle Image',
      type: 'image',
    },
    {
      name: 'mainImage',
      title: 'Main Image',
      type: 'image',
    },
    {
      name: 'resourcesHeading',
      title: 'Resources Heading',
      type: 'string',
    },
    {
      name: 'resourcesDescription',
      title: 'Resources Description',
      type: 'text',
    },
    {
      name: 'subServices',
      title: 'Sub Services Lists',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Title', type: 'string' },
            {
              name: 'items',
              title: 'List Items',
              type: 'array',
              of: [{ type: 'string' }],
            },
          ],
        },
      ],
    },
  ],
}

export default sectionTwo;
