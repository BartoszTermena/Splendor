import React from 'react'
const token_list = [];
export default function TakenTokens(taken_tokens) {
 
  const token = Object.values(taken_tokens).map((token) => {
    token_list.push(token.name);
  })
  const itemCount = {};
    token_list.forEach(function(value){
      if(value in itemCount) itemCount[value] = itemCount[value] + 1;
      else itemCount[value] = 1;
  })
  const list = Object.entries(itemCount).map(((item) => {
    console.log(item)
    if (item[0] === 'undefined') {
      return (null)
    } else {
    return (
      <div className="col s-2">
        <img className="responsive-img tokens higlight" src={window.location.origin + `/tokens/${item[0]}.png`}/>
        <i className="bottom-left">{item[1]}</i>
        
        </div>
    )
  }}))

  return (
    <div>
     {list}
    
    </div>
  )
}

