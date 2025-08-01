const sectionThree = {
  name: 'sectionThree',
  title: 'Section Three - Our Work Portfolio',
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
      name: 'projects',
      title: 'Projects',
      type: 'array',
      of: [
        {
          type: 'object',
          fields: [
            { name: 'title', title: 'Project Title', type: 'string' },
            { name: 'shortDetail', title: 'Short Detail', type: 'string' },
            { name: 'description', title: 'Description', type: 'text' },
            { name: 'mainLink', title: 'Main Link URL', type: 'url' },
            { name: 'moreInfoLink', title: 'More Info Link URL', type: 'url' },
            {
              name: 'image',
              title: 'Project Image',
              type: 'image',
            },
            {
              name: 'customClass',
              title: 'Project Div Custom Class (e.g., imageOne, imageTwo)',
              type: 'string',
            },
          ],
        },
      ],
    },
  ],
}

export default sectionThree
