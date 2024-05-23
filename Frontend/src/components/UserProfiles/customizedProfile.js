import React, { useState, useEffect } from 'react';
import Draggable from 'react-draggable';
// import AddImage from './Components/Draggable2.js';
// import "./App.css"
// import UserProfile from './Components/Draggable2.js';

const CustomiseProfile = () => {
  const [id, setId] = useState("");
  const [fontsizeinput, setfontsizeinput] = useState(0);
  const [fontweightinput, setfontweightinput] = useState(0);
  const [colorinput, setcolorinput] = useState("#563d7c");
  const [background, setbackground] = useState("#white");
  const [height, setheight] = useState(0);
  const [width, setwidth] = useState(0);
  const [radius, setradius] = useState(0);
  const [image, setimage] = useState("https://media.istockphoto.com/id/1359619252/vector/green-meadow-with-white-clouds-summer-green-view-landscape-background-illustration.jpg?s=612x612&w=0&k=20&c=YggMbY3s0TLrIWpzU0fRj0tgc2JrLZti9-3YLnJi5EU=");

  const [draggableElements, setDraggableElements] = useState(() => {
    // Load draggableElements from local storage or return an empty array if not found
    const storedElements = localStorage.getItem('draggableElements');
    return storedElements ? JSON.parse(storedElements) : [];
  });

  const addHeading = (value) => {
    setDraggableElements(prevElements => [
      ...prevElements,
      (value === 'l') ? { id: prevElements.length + value, position: { x: 0, y: 50 }, background: "white", height: "3", width: "200", radius: "0" } :
        (value === 'c') ? { id: prevElements.length + value, position: { x: 50, y: 50 }, background: "white", height: "100", width: "100", radius: "100" } :
          (value === 'b') ? { id: prevElements.length + value, position: { x: 50, y: 50 }, background: "white", height: "100", width: "100", radius: "0" } :
            (value === 'i') ? { id: prevElements.length + value, position: { x: 50, y: 50 }, image: "https://media.istockphoto.com/id/1359619252/vector/green-meadow-with-white-clouds-summer-green-view-landscape-background-illustration.jpg?s=612x612&w=0&k=20&c=YggMbY3s0TLrIWpzU0fRj0tgc2JrLZti9-3YLnJi5EU=", height: "150", width: "150", radius: "0" } :
              { id: prevElements.length + value, value: '', position: { x: 0, y: 20 }, fontSize: '18', fontWeight: "5", color: "black", background: "transparent" }
    ]);
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.key === 'Delete') {
        if (id) {
          setDraggableElements(prevElements => prevElements.filter(element => element.id !== id));
        } else {
          alert("Please select an element");
        }
      }
    };

    document.addEventListener('keydown', handleKeyDown);

    return () => {
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [draggableElements, setDraggableElements]);

  const deleteElement = (value) => {
    if (value === 'cc') {
      localStorage.removeItem('draggableElements');
      localStorage.removeItem("backgroundimage");
      setDraggableElements([]);
    } else if (id) {
      if (value === 'de') {
        setDraggableElements(prevElements => prevElements.filter(element => element.id !== id));
      }
    } else {
      alert("Please select an element");
    }
  };

  const handleInputChange = (id, event) => {
    const newValue = event.target.value;
    setDraggableElements(prevElements =>
      prevElements.map(element =>
        element.id === id ? { ...element, value: newValue } : element
      )
    );
    adjustTextareaSize(event.target);
  };

  const handleDragStop = (id, event, data) => {
    draggableElements.map(element => {
      if (element.id === id) {
        setfontsizeinput(element.fontSize);
        setfontweightinput(element.fontWeight);
        setcolorinput(element.color)
        setbackground(element.background)
        setheight(element.height)
        setwidth(element.width)
        setradius(element.radius)
        setimage(element.image)
      }
    })
    setDraggableElements(prevElements =>
      prevElements.map(element =>
        element.id === id ? { ...element, position: { x: data.x, y: data.y } } : element
      )
    );
  };

  const handlevalues = (value, item) => {
    if (item === 'fs') {
      setDraggableElements(prevElements => prevElements.map(element => element.id === id ? { ...element, fontSize: value } : element));
    } else if (item === 'fw') {
      setDraggableElements(prevElements => prevElements.map(element => element.id === id ? { ...element, fontWeight: value } : element));
    } else if (item === 'c') {
      setDraggableElements(prevElements => prevElements.map(element => element.id === id ? { ...element, color: value } : element));
    } else if (item === 'bg') {
      setDraggableElements(prevElements => prevElements.map(element => element.id === id ? { ...element, background: value } : element));
    } else if (item === 'h') {
      setDraggableElements(prevElements => prevElements.map(element => element.id === id ? { ...element, height: value } : element));
    } else if (item === 'w') {
      setDraggableElements(prevElements => prevElements.map(element => element.id === id ? { ...element, width: value } : element));
    } else if (item === 'r') {
      setDraggableElements(prevElements => prevElements.map(element => element.id === id ? { ...element, radius: value } : element));
    } else if (item === 'i') {
      setDraggableElements(prevElements => prevElements.map(element => element.id === id ? { ...element, image: value } : element));
    }
  };

  const adjustTextareaSize = (textarea) => {
    textarea.style.height = 'auto'; // Reset height to auto to shrink if needed
    textarea.style.height = `${Math.min(textarea.scrollHeight, 490)}px`; // Set height based on scrollHeight with a max of 490px
    textarea.style.width = `${Math.max(textarea.value.length, 10)}ch`; // Adjust width based on content length
  };

  useEffect(() => {
    // Save draggableElements to local storage whenever it changes
    localStorage.setItem('draggableElements', JSON.stringify(draggableElements));
    draggableElements.forEach((element) => {
      if ((element.id[element.id.length - 1]) === 't') {
        const textarea = document.getElementById(`input-${element.id}`);
        if (textarea) {
          adjustTextareaSize(textarea);
        }
      }
    });
  }, [draggableElements]);

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    if (file) {
      const reader = new FileReader();
      reader.onloadend = () => {
        const base64String = reader.result;
        handlevalues(base64String, 'i');
        setimage(base64String);
      };
      reader.readAsDataURL(file);
    }
  };

  const templates = [{ img1: "./Images/21.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/15.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/1.png", img2: "./Images/1.png", textcolor: "white" }, { img1: "./Images/2.png", img2: "./Images/3.png", textcolor: "black" }, { img1: "./Images/4.png", img2: "./Images/5.png", textcolor: "black" }, { img1: "./Images/6.png", img2: "./Images/21.png", textcolor: "white" }, { img1: "./Images/7.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/8.png", img2: "./Images/21.png", textcolor: "black" }, { img1: "./Images/9.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/10.png", img2: "./Images/22.png", textcolor: "black" }, { img1: "./Images/11.png", img2: "./Images/20.png", textcolor: "black" }, { img1: "./Images/12.png", img2: "./Images/12.png", textcolor: "white" }, { img1: "./Images/13.png", img2: "./Images/13.png", textcolor: "white" }, { img1: "./Images/14.png", img2: "./Images/15.png", textcolor: "black" }, { img1: "./Images/16.png", img2: "./Images/17.png", textcolor: "black" }, { img1: "./Images/18.png", img2: "./Images/18.png", textcolor: "white" }, { img1: "./Images/19.png", img2: "./Images/19.png", textcolor: "white" }];

  return (<>
    {/* //================================================================ */}
    <div className="container mt-3 ">
      <div className="main-body">
        <div className="row">
          <div className="col-sm-4">
            <div className="position-relative d-flex flex-column bg-white border border-0 rounded mb-1 card" style={{ minWidth: "0", wordWrap: "break-word", backgroundClip: "border-box", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
              <div className="card-body p-1 pt-3">
                <div className="d-flex flex-column text-start">
                  <div className=" d-flex justify-content-around mb-3">
                    <div className="col-sm-3 d-flex justify-content-center">
                      <button className="btn btn-success" onClick={() => addHeading('t')}>TextField</button>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center">
                      <button className="btn btn-success" onClick={() => addHeading('b')}>Box</button>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center">
                      <button className="btn btn-success" onClick={() => addHeading('c')}>Circle</button>
                    </div>
                    <div className="col-sm-3 d-flex justify-content-center">
                      <button className="btn btn-success" onClick={() => addHeading('l')}>Line</button>
                    </div>
                  </div>
                  <div className="d-flex justify-content-around">
                    <div className="col-sm-4 d-flex justify-content-center">
                      <button className="btn btn-success" onClick={() => addHeading('i')}>Image</button>
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center">
                      <button className="btn btn-danger" onClick={() => deleteElement('de')}>DeleteElement</button>
                    </div>
                    <div className="col-sm-4 d-flex justify-content-center">
                      <button className="btn btn-danger" onClick={() => deleteElement('cc')}>ClearCard</button>
                    </div>
                  </div>
                  <hr />
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <h6 className="mb-0">FontWeight:</h6>
                    </div>
                    <div className="col-sm-6 text-secondary">
                      <input type="number" className="form-control fs-6 bg-transparent" id='FontWeight' value={fontweightinput} min={0} max={10} onChange={(event) => { handlevalues(event.target.value, 'fw'); setfontweightinput(event.target.value) }} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <h6 className="mb-0">FontSize:</h6>
                    </div>
                    <div className="col-sm-6 text-secondary">
                      <input type="number" className="form-control fs-6 bg-transparent" id='FontSize' value={fontsizeinput} min={0} max={50} onChange={(event) => { handlevalues(event.target.value, 'fs'); setfontsizeinput(event.target.value) }} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <h6 className="mb-0">Height:</h6>
                    </div>
                    <div className="col-sm-6 text-secondary">
                      <input type="number" className="form-control fs-6 bg-transparent" id='Height' value={height} min={0} max={490} onChange={(event) => { handlevalues(event.target.value, 'h'); setheight(event.target.value) }} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <h6 className="mb-0">Width:</h6>
                    </div>
                    <div className="col-sm-6 text-secondary">
                      <input type="number" className="form-control fs-6 bg-transparent" id='Width' value={width} min={0} max={279} onChange={(event) => { handlevalues(event.target.value, 'w'); setwidth(event.target.value) }} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <h6 className="mb-0">BorderRadius:</h6>
                    </div>
                    <div className="col-sm-6 text-secondary">
                      <input type="number" className="form-control fs-6 bg-transparent" id='BorderRadius' value={radius} min={0} max={100} onChange={(event) => { handlevalues(event.target.value, 'r'); setradius(event.target.value) }} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <h6 className="mb-0">Image:</h6>
                    </div>
                    <div className="col-sm-6 text-secondary">
                      <input type="file" className="form-control fs-6 bg-transparent" id='Image' onChange={handleImageChange} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <h6 className="mb-0">Color:</h6>
                    </div>
                    <div className="col-sm-6 text-secondary">
                      <input type="color" className="form-control form-control-lg fs-6 bg-transparent" id='Color' value={colorinput} onChange={(event) => { handlevalues(event.target.value, 'c'); setcolorinput(event.target.value) }} />
                    </div>
                  </div>
                  <div className="row mb-3">
                    <div className="col-sm-6">
                      <h6 className="mb-0">BackgroundColor:</h6>
                    </div>
                    <div className="col-sm-6 text-secondary">
                      <input type="color" className="form-control form-control-lg fs-6 bg-transparent" id='BackgroundColor' value={background} onChange={(event) => { handlevalues(event.target.value, 'bg'); setbackground(event.target.value) }} />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="col-sm-8">
            <div className="position-relative d-flex flex-column bg-white border border-0 rounded mb-1 card" style={{ minWidth: "0", wordWrap: "break-word", backgroundClip: "border-box", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
              {/* Personal Information ======================================================= */}
              <div className="card-body p-0 m-0 pt-1">
                <h4 className="fw-bold text-center">Customized Card</h4>
                <div className="d-flex justify-content-center">
                  <div className="card personalcard1-img d-flex align-items-center justify-content-start flex-column text-center" style={{ width: "18rem", height: "500px", background: `url(${localStorage.getItem("backgroundimage")}) center/cover no-repeat` }}>
                    <div id="dragdiv" className="dragdiv bg-transparent position-relative card container p-1" style={{ height: '500px' }}>
                      {draggableElements.map(element => (
                        <Draggable key={element.id} bounds=".dragdiv" defaultPosition={element.position} position={element.position} onStop={(event, data) => { handleDragStop(element.id, event, data); setId(element.id) }}>
                          {((element.id[element.id.length - 1]) === 't') ?
                            <textarea id={`input-${element.id}`} rows={1} value={element.value} onChange={e => { handleInputChange(element.id, e); setId(element.id) }} onClick={() => { setId(element.id) }} className="p-0 m-0 text-center position-absolute rounded-0 border-0" placeholder="Text Field" style={{hover:`${element.hover}`, fontSize: `${element.fontSize}px`, fontWeight: `${element.fontWeight}00`, color: `${element.color}`, background: `${(element.background == '#000000') ? 'transparent' : (element.background)}`, maxHeight: '490px', maxWidth: '279px', width: '279px', cursor: "pointer", hover:"textbackground-color: red;" }}></textarea>
                            : ((element.id[element.id.length - 1]) === 'i') ?
                              <div id={`input-${element.id}`} className="position-absolute border d-flex align-items-center justify-content-center overflow-hidden" style={{ maxHeight: '490px', maxWidth: '279px', width: `${element.width}px`, height:` ${element.height}px`, borderRadius: `${element.radius}px`, cursor: "pointer", background: `url(${element.image}) center/cover no-repeat`, backgroundSize: "cover" }}>  {(element.image === "https://media.istockphoto.com/id/1359619252/vector/green-meadow-with-white-clouds-summer-green-view-landscape-background-illustration.jpg?s=612x612&w=0&k=20&c=YggMbY3s0TLrIWpzU0fRj0tgc2JrLZti9-3YLnJi5EU=") ? <input type="file" className='form-control' id="image" name="image" onChange={handleImageChange} /> : ""}</div> :
                              <div id={`input-${element.id}`} className="position-absolute border" style={{ background: `${(element.background == '#000000') ? 'transparent' : (element.background)}`, maxHeight: '490px', maxWidth: '279px', width: `${element.width}px`, height: `${element.height}px`, borderRadius: `${element.radius}px`, cursor: "pointer" }}></div>}
                        </Draggable>
                      ))}
                    </div>
                  </div>
                </div>
              </div>
              <div className="container text-center d-flex gap-3 flex-nowrap overflow-auto bg-transparent overflow-x-scroll mt-3 p-2" style={{ scrollbarWidth: "none", boxShadow: "0 2px 6px 0 rgb(218 218 253 / 65%), 0 2px 6px 0 rgb(206 206 238 / 54%)" }}>
                {templates.map((img, index) => <div key={index} className="card shadow" id="view_hover" style={{ flex: "0 0 auto" }}>
                  <img src={img.img1} onClick={() => { localStorage.setItem("backgroundimage", img.img1); handleDragStop(); }} className="card-img" style={{ width: "50px", cursor: "pointer" }} height={90} alt="..." />
                </div>)}
              </div>
            </div>
          </div>
        </div>
      </div>
    </div >
  </>);
};

export default CustomiseProfile;