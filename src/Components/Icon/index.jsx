import React from "react";
import Icons from './export'







export default ({name, ...props}) => {
    const C = Icons[name.toLowerCase()]
    return C
      ? <C {...props}/>
      : null;
}