function addLinks (elem) {
  //console.log('elem', elem);
  let childNode = elem.childNodes[0];
  let childText = childNode.textContent;
  //console.log('childText', childText);
  if (childText !== undefined){
    switch(childText){
      case '2018 - Tripartite Pavilion for WIEE':
   		 let a = linkBody(elem, childNode, childText)
         a.href = '/nio-chengdu';
         break;
      default:
         break;
    }
    console.log('Complete:', elem)
  }
}
function linkBody (element, nodeOfChild, textOfChild){
    element.removeChild(nodeOfChild);
    let a = document.createElement("a");
    let text = document.createTextNode(textOfChild);
    a.appendChild(text);
    a.style.textDecoration = 'underline'; 
    a.style.color = 'blue';
    element.appendChild(a);
    return a;
}
      
//Get all items in a column
var cols = document.getElementsByClassName("sqs-col-2");
for (let [k, value] in Object.entries(cols)){
    var colContents = cols[k].childNodes;
      console.log('k:',k,'. colContents:', colContents);
    // Loop through the items
    for (let [i, val] of Object.entries(colContents)){
        if(i > 0){
            let currentDiv = colContents[i];
            console.log('i:', i, '. currentDiv:', currentDiv);
            let currentDivClass = currentDiv.className;
            if(currentDivClass.includes('image-block')){
                //console.log('found image block')
                let textAsset = colContents[i-1].getElementsByClassName("sqsrte-small");
                console.log('found ',textAsset.length, ' image blocks'); 
                textAsset = textAsset[textAsset.length -1];
                addLinks(textAsset);
                //console.log('textAsset', textAsset);
                //let child = textAsset[0] ? textAsset[0].childNodes[0].wholeText : undefined;
                //console.log('child', child);
                var height = 0-(textAsset.offsetHeight);
                //let imageAsset = currentDiv.childNodes[0];
                let imageAsset = currentDiv;
                imageAsset.classList.add("cust-image-block");
                //textAsset.classList.add("cust-text-block");
                  //let imgTag = imageAsset.getElementsByTagName('img');
                  //imgTag.style.height = 0;    
                  //imageAsset.style.height = 0;
                //imageAsset.style.width = '100%';
                  //imageAsset.style.padding= '0px';
                  //imageAsset.style.position = 'relative';
                  //imageAsset.style.transition = 'visibility 0s, opacity 0.5s linear';
                imageAsset.style.opacity = 0;
                //imageAsset.style.opacity = 1;
                imageAsset.style.top = height+'px';
                //textAsset.style.color = 'red';
                
                textAsset.onmouseout = function mouseOut() {
                  imageAsset.style.height = 0;
                  imageAsset.style.opacity = 0;
                  //imageAsset.style.display = 'none';
                  imageAsset.style.left = '-115vw';
                  textAsset.style.color = 'black';
                  //textAsset.style.color = 'red';
                  //textAsset.style.fontWeight = 'normal';
                  //imageAsset.style.transition = 'visibility 0s, opacity 0.5s linear';
                }
                textAsset.onmouseover = function mouseOver() {
                  //imageAsset.style.color = 'blue';
                  imageAsset.style.opacity = 1;
                  imageAsset.style.zIndex = 100;
                  imageAsset.style.transition = 'visibility 0s, opacity 0.5s linear';
                  imageAsset.style.left = '-15vw';
                  //imageAsset.style.display = 'inline-block';
                  textAsset.style.color = 'green';
                  //textAsset.style.fontWeight = 'bold';
                }
            }
        }
    }
}