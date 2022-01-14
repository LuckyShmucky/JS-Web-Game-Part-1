
function newImage( source, vert, horiz){
let newCharacter = document.createElement('img')
newCharacter.src = source
newCharacter.style.position = 'fixed'
newCharacter.style.left = vert 
newCharacter.style.bottom = horiz 
document.body.append(newCharacter)
}

newImage('assets/green-character.gif' , '100px', '100px')
newImage('assets/pine-tree.png', '450px', '200px')
newImage('assets/tree.png' , '200px' , '300px')
newImage('assets/pillar.png', '350px', '100px')
newImage('assets/well.png', '500px' , '425px')

function newItem(itemSource, itemVert, itemHoriz){
    let item = document.createElement('img')
    item.src = itemSource
    item.style.position = 'fixed'
    item.style.left = itemVert
    item.style.bottom = itemHoriz
    document.body.append(item)
    

  item.addEventListener('dblclick', function(){
    item.remove()
})
}

newItem('assets/sword.png', '500px', '405px' )
newItem('assets/shield.png', '165px', '185px')
newItem('assets/staff.png', '600px', '100px')


function bgImage(bgSource, bgVert, bgHoriz){
  let bg = document.createElement('img');
  bg.src = bgSource;
  bg.style.position = 'fixed';
  bg.style.left = bgVert;
  bg.style.bottom = bgHoriz;
  document.body.append(bg)


}

bgImage('grass.png', '400px', '400px')