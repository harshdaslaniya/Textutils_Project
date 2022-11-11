import React , {useState} from 'react'
export default function TextForm(props) {
  const handleCopy =()=>{
    var text = document.getElementById("myBox");
    text.select();
    navigator.clipboard.writeText(text.value);
  }
  const handlExtraSpace = ()=>{
    let newText= text.split(/[ ]+/);
    setText(newText.join(" "));
  }
  const handleUpClick = ()=>{
    let newText = text.toUpperCase();
    setText(newText);
    props.showalert('convert to uppercase','successfully');
  }
  const handleLoClick = ()=>{
    let newText = text.toLowerCase();
    setText(newText);
    props.showalert('convert to lowercase','successfully');
  }
  const handleClear = ()=>{
    setText("");
    setWord(numWord(""));
    props.showalert('clear a textarea','successfully');
  }
  let numWord = (dupText)=> {
    let newText = dupText.split(" ");
    var c = 0;
    for(let i = newText.length - 1;i >=0;i--)
    {
      if(newText[i] === "")
      c++;
    }
    return newText.length - c;
  }
  const download=(filename)=>{
    const element = document.createElement("a");
    const file = new Blob([document.getElementById('myBox').value],    
                {type: 'text/plain;charset=utf-8'});
    element.href = URL.createObjectURL(file);
    element.download = "myFile.txt";
    document.body.appendChild(element);
    element.click();
  }
  const handleOnChange = (event)=>{
    setText(event.target.value);
    setWord(numWord(event.target.value));
    };
  const [text , setText] = useState("");
  const [word , setWord] = useState('0');
  return (
      <div className={`text-${props.mode ? 'dark':'light'} container`}>
        <div className="mb-3">
            <h1 >{props.heading}</h1>
            <textarea className="form-control" style={props.s2} onChange={handleOnChange} value={text} id="myBox" rows="5"></textarea>
            <button type="button" className={`btn btn-${props.mode ? 'warning':'secondary' } me-1 mt-2`} onClick={handleCopy}>Copy</button>
            <button type="button" className={`btn btn-${props.mode ? 'warning':'secondary' } mx-1 mt-2`} onClick={handleUpClick}>Convert in UpperCase</button>
            <button type="button" className={`btn btn-${props.mode ? 'warning':'secondary' } mx-1 mt-2`} onClick={handleLoClick}>Convert in LowerCase</button>
            <button type="button" className={`btn btn-${props.mode ? 'warning':'secondary' } mx-1 mt-2`} onClick={handlExtraSpace}>remove Extra Space</button>
            <button type="button" className={`btn btn-${props.mode ? 'warning':'secondary' } mx-1 mt-2`} onClick={handleClear}>Clear</button>
            <button type="button" className={`btn btn-${props.mode ? 'warning':'secondary' } mx-1 mt-2`} onClick={download}>Download</button>
        </div>
         <div>
            <h3>Text summary :-</h3>
            <h5><ol>
            <li><p>In text Total 👉 {word} <b>word</b> and {text.length} <b>Character</b></p></li>
            <li><p>Time required for reading paragraph is <b> {0.005 * word} minutes</b> or <b>{0.3 * word} seconds</b></p></li>
            </ol></h5>
            <h3>Preview :-</h3>
            {/* Here in text has too lengthy word that length id more than container so it goes out of container */}
            <p className=" fs-5 fst-italic text-primary text-break">{text.length===0 ? "Enter a text in textbox to see Priview" : text}</p>
         </div>
      </div>
    
 
  )
}
