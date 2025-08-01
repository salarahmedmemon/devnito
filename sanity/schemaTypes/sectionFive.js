const sectionFive = {
  name: 'sectionFive',
  title: 'Section Five',
  type: 'document',
  fields: [
    {
      name: 'title',
      title: 'Section Title',
      type: 'string',
    },
    {
      name: 'stats',
      title: 'Indicators',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'label', title: 'Label', type: 'string' },
            { name: 'value', title: 'Value', type: 'string' },
            { name: 'image', title: 'Optional Image', type: 'image', options: { hotspot: true } },
          ],
        },
      ],
    },
  ],
}

export default sectionFive
