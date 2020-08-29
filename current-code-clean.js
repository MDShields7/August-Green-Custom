var href = window.location.href;
if (href === 'https://www.augustgreen.com/projects'){
function addLinks (elem) {
    let childNode = elem.childNodes[0];
    let childText = childNode.textContent;
    if (childText !== undefined){
      switch(childText){
        case '2018 - Tripartite Pavilion for WIEE':
              let a = linkBody(elem, childNode, childText)
           a.href = '/nio-chengdu';
           break;
        default:
           break;
      }
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
        
  var cols = document.getElementsByClassName("sqs-col-2");
  for (let [k, value] in Object.entries(cols)){
      var colContents = cols[k].childNodes;
      for (let [i, val] of Object.entries(colContents)){
          if(i > 0){
              let currentDiv = colContents[i];
              let currentDivClass = currentDiv.className;
              if(currentDivClass.includes('image-block')){
                  let textAsset = colContents[i-1].getElementsByClassName("sqsrte-small");
                  textAsset = textAsset[textAsset.length -1];
                  addLinks(textAsset);
                  var height = 0-(textAsset.offsetHeight);
                  let imageAsset = currentDiv;
                  imageAsset.classList.add("cust-image-block");
                  imageAsset.style.opacity = 0;
                  imageAsset.style.top = height+'px';
                  
                  textAsset.onmouseout = function mouseOut() {
                    imageAsset.style.height = 0;
                    imageAsset.style.opacity = 0;
                    imageAsset.style.left = '-115vw';
                    textAsset.style.color = 'black';
                  }
                  textAsset.onmouseover = function mouseOver() {
                    imageAsset.style.opacity = 1;
                    imageAsset.style.zIndex = 100;
                    imageAsset.style.transition = 'visibility 0s, opacity 0.5s linear';
                    imageAsset.style.left = '-15vw';
                    textAsset.style.color = 'green';
                  }
              }
          }
      }
  }
}