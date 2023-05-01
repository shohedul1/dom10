function createElement(tagName,className,innerHTML){
    let tag = document.createElement(tagName)
    tag.className = className||''
    tag.innerHTML = innerHTML||''
    return tag
}
let li = createElement('li','list-group-item','Four');
li.setAttribute('title','I am a developer');

let list = document.getElementById('list');
list.appendChild(li);

let li1= createElement('li','list-group-item','Five');
li1.setAttribute('title','create a javascript');
list.appendChild(li1);

let fristChild = list.firstElementChild;
setTimeout(()=>{
   fristChild.innerHTML = 'this is a shohidul.he create a javascript model'
   fristChild.style.color = 'red'
   fristChild.style.backgroundColor = 'green'

},5000)

let listItem = list.lastElementChild.cloneNode()///element create
listItem.innerHTML = 'six'
listItem.setAttribute('title','this is a game')
list.appendChild(listItem)

setTimeout(()=>{
    list.lastChild.remove()
},6000)

//console.log(list.attributes)
//console.log(list.getAttributeNames())
//console.log(list.getAttributeNode('class'))
//console.log(list.getAttribute('id'))

let title = document.getElementById('title')
   
    title.style.color='white'
    title.style.backgroundColor='black'
    title.style.gap='20px'
    title.style.fontSize ='20'

    list.style.color='green'
    list.style.backgroundColor='white'
    list.style.gap='20px'
    list.style.fontSize ='20'


