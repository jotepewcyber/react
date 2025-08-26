import React from 'react'
function Card({channel="no-value",btntext}){
    console.log(channel,btntext);
 
    return(
    <div className="flex flex-col rounded-xl  p-4"
        style={{
          border: '0.88px solid',
  
          backdropFilter: 'saturate(180%) blur(14px)',
          background: ' #ffffff0d',
        }}
      >
        <div>
          <img
            src="https://res.cloudinary.com/ddcg0rzlo/image/upload/v1652470298/9StaF0UBJfih_df0248.gif"
            alt="nft-gif"
            width="400"
            height="400"
            className="rounded-xl"
          />
        </div>
        <div className="flex flex-col  rounded-b-xl py-4 ">
          <div className="flex justify-between">
            <h1 className="font-RubikBold ">{channel||"no-value"}</h1>
            
            <button className="bg-yellow-300 text-white font-bold flex flex-col rounded-xl h-10 w-20">{btntext || "no-value"}</button>
            {/* {btntext||no-value means is btntext is not passed in App.jsx with image then no-value to be displayed OR directly default value could be passed in function Card(btntext="content")} */}
          </div>
          <div className="flex  justify-between font-mono">
           
            <p>#345</p>
            <p>0.01</p>
          </div>
        </div>
      </div>
    )
}
export default Card