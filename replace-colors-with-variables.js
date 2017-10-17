const replace = require('replace-in-file');

const colorMap = [
  { color: '#e9e9e9', name: '$light-grey' },
  { color: '#000056', name: '$midnight'   },
  { color: '#424242', name: '$dark-grey'  },
  { color: '#1F67A6', name: '$dark-grey'  },
  { color: '#023463', name: '$dark-grey'  },
  { color: '#0073FF', name: '$dark-grey'  }
];

colorMap.forEach(function(colorAndName) {
  let options = {
    files: 'temp/*.css',
    from:  new RegExp(colorAndName.color, 'gi'),
    to:    colorAndName.name,
  };
  try {
    const changes = replace.sync(options);
    console.log('Modified files:', changes.join(', '));
  }
  catch (error) {
    console.error('Error occurred:', error);
  }
});
