const colors = [
    {
      name: 'Black',
      hexCode: '#000000',
      decimalCode: '(0,0,0)'
    },
    {
      name: 'White',
      hexCode: '#FFFFFF',
      decimalCode: '(255,255,255)'
    },
    {
      name: 'Red',
      hexCode: '#FF0000',
      decimalCode: '(255,0,0)'
    },
    {
      name: 'Lime',
      hexCode: '#00FF00',
      decimalCode: '(0,255,0)'
    },
    {
      name: 'Blue',
      hexCode: '#0000FF',
      decimalCode: '(0,0,255)'
    },
    {
      name: 'Yellow',
      hexCode: '#FFFF00',
      decimalCode: '(255,255,0)'
    },
    {
      name: 'Cyan / Aqua',
      hexCode: '#00FFFF',
      decimalCode: '(0,255,255)'
    },
    {
      name: 'Magenta / Fuchsia',
      hexCode: '#FF00FF',
      decimalCode: '(255,0,255)'
    },
    {
      name: 'Silver',
      hexCode: '#C0C0C0',
      decimalCode: '(192,192,192)'
    },
    {
      name: 'Gray',
      hexCode: '#808080',
      decimalCode: '(128,128,128)'
    },
    {
      name: 'Maroon',
      hexCode: '#800000',
      decimalCode: '(128,0,0)'
    },
    {
      name: 'Olive',
      hexCode: '#808000',
      decimalCode: '(128,128,0)'
    },
    {
      name: 'Green',
      hexCode: '#008000',
      decimalCode: '(0,128,0)'
    },
    {
      name: 'Purple',
      hexCode: '#800080',
      decimalCode: '(128,0,128)'
    },
    {
      name: 'Teal',
      hexCode: '#008080',
      decimalCode: '(0,128,128)'
    },
    {
      name: 'Navy',
      hexCode: '#000080',
      decimalCode: '(0,0,128)'
    }
];
  
function colorGenerator(){
    let randomColorCode = Math.floor(Math.random()*colors.length)
    console.log(colors[randomColorCode].hexCode)
}
colorGenerator()
  