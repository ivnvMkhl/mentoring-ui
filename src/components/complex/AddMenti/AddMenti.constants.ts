const addMentiFormItems = [
  { title: 'Имя', dataIndex: 'Name', required: true, message: 'Пожалуйста, введите имя ученика' },
  { title: 'Уровень', dataIndex: 'Grade', required: false },
  { title: 'Telegram', dataIndex: 'Telegram', required: false },
  { title: 'Email', dataIndex: 'Email', required: true, message: 'Пожалуйста, введите email ученика' },
  { title: 'Город', dataIndex: 'Location', required: true, message: 'Пожалуйста, введите город проживания ученика' },
];

export { addMentiFormItems };
