
/**
 * 
 * <div id = "parent">
 *    <div id = "child">
 *      <h1> I'm A H1 tag </h1>
 * </div>
 * </div>
 * 
 * 
 * 
 * 
 * 
 */




const parent = React.createElement("div", {id : "parent"} , React.createElement("div", {id : "child"}, [React.createElement("h1" ,{}, "I'm A h1 tag"),React.createElement("h1" ,{}, "I'm A h1 tag")])
 );

    const root = ReactDOM.createRoot(document.getElementById("root"));

    root.render(parent);