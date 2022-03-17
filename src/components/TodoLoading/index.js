import React from 'react';
import './TodoLoading.css';
import ContentLoader from 'react-content-loader'


export default function TodoLoading(props) {
  return (
  <>
    <div className='LoadingContainer'>
     
      <div className="LoadingText">
          <ContentLoader
        viewBox="0 0 400 160"
        height={16}
        width={100}
        backgroundColor="transparent"
        {...props}
      >
        <circle cx="150" cy="86" r="50" />
        <circle cx="194" cy="86" r="50" />
        <circle cx="238" cy="86" r="50" />
      </ContentLoader>
    </div>
      
    </div>
    
</>
    
  )
}