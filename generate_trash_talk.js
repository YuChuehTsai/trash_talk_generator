// define sample function to randomly return a item in an array
function sample(array) {
  const index = Math.floor(Math.random() * array.length)
  return array[index]
}

function generateTrashTalk(option) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const phrase = ['很簡單', '很容易', '很快', '很正常']
  let target = ''
  let randomTask = ''
  let trashTalk = ''

  // 選擇兩者以上之職業
  if (option.engineer === 'on' && option.designer === 'on' || option.engineer === 'on' && option.entrepreneur === 'on' || option.designer === 'on' && option.entrepreneur === 'on') {
    trashTalk = '請勿重複選取職業'
    return trashTalk
  }
  // 無選擇職業
  if (option.engineer !== 'on' && option.designer !== 'on' && option.entrepreneur !== 'on') {
    trashTalk = '請選取職業'
    return trashTalk
  }

  // 選擇不同職業
  if (option.engineer === 'on') {
    target = '工程師'
    randomTask = sample(task.engineer)
  }
  if (option.designer === 'on') {
    target = '設計師'
    randomTask = sample(task.designer)
  }
  if (option.entrepreneur === 'on') {
    target = '企業家'
    randomTask = sample(task.entrepreneur)
  }

  // 產生幹話
  trashTalk = `身為一個${target}，${randomTask}，${sample(phrase)}吧！`
  return trashTalk
}

module.exports = generateTrashTalk