import React from 'react'
import { SyncLoader } from 'react-spinners'

const Loader = () => {
  return (
    <div style={{width:'100vw', height:'100vh', display:'flex', justifyContent:'center', alignItems:'center', flexDirection:'column'}}>
      <SyncLoader color="#36d7b7" />
      </div>
      )
    }
    
export default Loader