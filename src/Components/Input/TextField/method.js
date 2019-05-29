export const validatePattern = (event,props) => {
 

  // const container = event.currentTarget;
  const element = event.target;
  // const parent = element.parentElement;
  // const emptyValue = element.value === "";


  const {
    pattern={},
    // customPattern
  } = props;
  let validationPattern = "";

  if(pattern.isEmail){
    const regex = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
    
    const exprexion = regex.toString().replace(/[/]/g, "")

    validationPattern = validationPattern + exprexion + '|';
  }
  if(pattern.upperCase){
    let regex;
    let exprexion = "";

    if(typeof pattern.upperCase === "boolean"){

      regex = new RegExp(`(?:.*[A-Z])`)
      exprexion = regex.toString().replace(/[/]/g, "")

    }else if(typeof pattern.upperCase === "number"){

      regex = new RegExp(`(?:.*[A-Z]){${pattern.upperCase},}`)
      exprexion = regex.toString().replace(/[/]/g, "")

    }else {
      exprexion = pattern.upperCase.source
    }

    validationPattern = `${validationPattern}(?=${exprexion})`;
  }
  if(pattern.lowerCase){
    let regex;
    let exprexion = "";

    if(typeof pattern.lowerCase === "boolean"){

      regex = new RegExp(`(?:.*[a-z])`)
      exprexion = regex.toString().replace(/[/]/g, "")

    }else if(typeof pattern.lowerCase === "number"){

      regex = new RegExp(`(?:.*[a-z]){${pattern.lowerCase},}`)
      exprexion = regex.toString().replace(/[/]/g, "")

    }else {
      
      exprexion = pattern.lowerCase.source
    }
    validationPattern = `${validationPattern}(?=${exprexion})`;
  }
    if(pattern.special){
      let regex;
      let exprexion = "";

    if(typeof pattern.special === "boolean"){

      if(pattern.special){
        regex = new RegExp(`[!@#$%^&*(),.?":{}|<>]{1,}`)
      }else{
        regex = new RegExp("([^!@#$%^&*()-_=+{};:,<.>]){1,}")
      }
      exprexion = regex.toString().replace(/[/]/g, "")

    }else if(Array.isArray(pattern.special)){
      regex = new RegExp(`[${pattern.special.join("")}]){1,}`)
      exprexion = regex.toString().replace(/[/]/g, "")

    }else {
      
      exprexion = pattern.lowerCase.source
    }

    validationPattern = `${validationPattern}(?=.*${exprexion})`;
  }
    if(pattern.maxLength){
      let regex;
      let exprexion = "";

    if(typeof pattern.maxLength === "number"){

      regex = new RegExp(`.{1,${pattern.maxLength}}$`)

      exprexion = regex.toString().replace(/[/]/g, "")

    } 

    validationPattern = `${validationPattern}(?=${exprexion})`;
  }

  // (?=.[!@#\$%\^&])
  // ${(pattern.maxLength || maxLength)?`^.{1,${pattern.maxLength ||
  // maxLength}}$`:""}
  validationPattern = `^${validationPattern.replace(/[ | ]$/g, "")}` 
  const validateString = new RegExp(validationPattern)
  // console.log('test',validateString.test('TttTtT#2'))
  
  return validateString.test(element.value);
}

export const applyFieldStyle = (event,state,updater,props) =>{
  const {
    max,
    pattern={},
    customPattern
  } = props;

  const container = event.currentTarget;
  const element = event.target;
  const parent = element.parentElement;
  const isValid = validatePattern(event,props)

  const condition = ((element.value === "") || ((element.value.length > 0) &&isValid));
  const emptyValue = element.value === "";


  if(customPattern || pattern || max){
  if(!condition){
    if(!element.required){
      parent.classList.remove('valid-input')
    }
    container.classList.toggle('invalid-input',true)
    parent.classList.toggle('invalid-input',true)

    !state.isError && updater({
      type:"SET_ERROR",
    })

  }else{
    if(!element.required){

      emptyValue
      ? parent.classList.remove('valid-input')
      : parent.classList.add('valid-input')
    }
    container.classList.remove('invalid-input')
      parent.classList.remove('invalid-input')

      state.isError && updater({
        type:"UNSET_ERROR",
      })
  }
}else{
  emptyValue
    ? parent.classList.remove('valid-input')
    : parent.classList.add('valid-input') 
}

}


export const setWordCount = (event,state,updater,props) => {
  const {
    withWordCounter
  } = props;

  // const container = event.currentTarget;
  const element = event.target;
  // const parent = element.parentElement;
  // const emptyValue = element.value === "";

  if(withWordCounter){
    updater({
      type:"SET_WORD_COUNT",
      payload:{
        wordCount:element.value.length
      }
    })
}
}


