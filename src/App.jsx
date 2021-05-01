import './App.css';
import QrReader from 'react-qr-reader'
import { useState } from 'react';
import { storeDataSheet } from './storeData';

function App() {

  const [state, setState] = useState({
    delay: 300,
    result: 'result',
  })
  const [scan ,setScan] = useState(false)

  const handleError = (data)=>{
    console.log(data)
  }


  const previewStyle = {
    height: 240,
    width: 320,
  }

  return (
    <div className="App" style={{
      backgroundColor : 'black',
      width : '100vw',
      height : '100vh',
      display : 'flex',
      flexDirection : 'column',
      justifyContent : 'center',
      alignItems : 'center'
    }}>
 
        <>
          <h3 style={{
            fontSize : "1.4rem",
            marginBottom : '20px',
            color : 'white'
          }} >
          {/* {state.result && console.log(state.result)} */}
          {state.result ? state.result : "hasil disini"}
          </h3>
          {scan ? (
            <>
              <QrReader
              // legacyMode
              delay={100}
              facingmode="front"
              style={previewStyle}
              onError={handleError}
              onScan={(e)=>{
                setState({
                  ...state,
                  result : "scanning.."
                })
                if(e != null){
                  storeDataSheet(e)
                  .then(hasil => {
                    console.log(hasil)
                    setState({
                      ...state,
                      result : hasil.data.split("-")[0]
                    })
                  })
                  setScan(false)
                }

              }}
            />
              <button onClick={()=>{
            setScan(true)
          }}
          style={{
            width : '80vw',
            height : '40px',
            color : "white",
            fontSize : "1.4rem",
            backgroundColor : 'red',
            textTransform : 'uppercase',
            border : 'none',
            outline : 'none',
            borderRadius : '100px',
            zIndex : '100',
            position : 'absolute',
            bottom : '50px'
          }}
          onClick={()=>{
            setScan(false)
          }}
          >cancel scan</button>

            </>
          ) : (
            <button onClick={()=>{
              setScan(true)
            }}
            style={{
              width : '80vw',
              height : '50px',
              color : "white",
              fontSize : "1.4rem",
              backgroundColor : 'red',
              textTransform : 'uppercase',
              border : 'none',
              outline : 'none',
              borderRadius : '100px'
            }}
            >scan qr</button>
          )}
          
        
            </>


    
    </div>
  );
}

export default App;
