const sectionFour = {
  name: 'clients',
  title: 'Clients',
  type: 'document',
  fields: [
    {
      name: 'name',
      title: 'Client Name',
      type: 'string',
    },
    {
      name: 'image',
      title: 'Client Image',
      type: 'image',
      options: {
        hotspot: true,
      },
    },
  ],
}

export default sectionFour;