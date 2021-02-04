const colors = {
  // attr: [dark, light]

  color: ['#D1D0C7', 'black'],
  smallColor: ['#B2B0A0', 'black'],
  inverseColor: ['black', 'white'],
  backgroundColor: ['#161616', '#F0F0E6'],
  sectionAlternate: ['#212121', '#E3E3DA'],
  followerBorder: ['#FFFFFF', 'yellow'],
  cursorColor: ['rgba(0,0,0,0)', 'rgba(0,0,0,0)'],
  primaryColor: ['#B6A865', '#224870'],
  noiseOpacity: ['.6', '.6'],
  borderRadius: ['3px', '5px'],
  borderWidth: ['1px', '1px'],
  borderColor: ['#B6A865', '#000000'],
  progressBackColor: ['#000000', '#A7A7A7'],
  progressColorStart: ['#D3C78A', '#386FA4'],
  progressColorEnd: ['#877148', '#1B3A62'],
  projectsBackgroundColor: ['#363636', '#CFCFCF'],
  projectsFooterBackgroundColor: ['#2F2F2F', '#AFAFAF'],
  projectsMeta: ['#C2BEAE', '#353535'],
  projectsDescription: ['#DCD8CB', '#black'],
  formBackgroundColor: ['#AEAEAE', '#AEAEAE'],
  globalBorderWidth: ['5px', '5px'],
  railColorMain: ['#FCFCFC', '#9F9F9F'],
  railColorMenu: ['#FCFCFC', '#9F9F9F'],
  projectSectionStroke: ['#3D3D3D', '#3D3D3D']

}


export const dark = Object.keys(colors).reduce((result, key) => {
  result[key] = () => colors[key][0]
  return result
}, {})

export const light = Object.keys(colors).reduce((result, key) => {
  result[key] = () => colors[key][1]
  return result
}, {})

