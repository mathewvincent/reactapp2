import React from 'react';

    const withClass=(WrapperComponent,className)=>{ 

        // useEffect(()=>{
        //     console.log('useeff logg from cockpit')
        // })

        return props=> 
          <div className={className}>
             <WrapperComponent {...props}/>
          </div>
    }


export default withClass;